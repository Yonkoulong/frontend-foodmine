import { Injectable } from "@angular/core";
import { FirebaseTaskService } from "../../firebase-admin";
import * as TaskActions from './actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from "rxjs";

@Injectable()
export class TaskEffects {
   
    constructor(
        private actions$: Actions,
        private firebaseTaskService: FirebaseTaskService
    ) {}

    // Load Task Effect
    loadTaskListEffect$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TaskActions.loadTaskList),
            mergeMap(action => 
                this.firebaseTaskService.getTasks(action.filterParams).pipe(
                    tap((response: any) => console.log(response)),
                    map(taskList => TaskActions.loadTaskListSuccess({ taskList })),
                    catchError(error => of(TaskActions.loadTaskListError({ httpError: error })))
                )
            )
        )
    );

    // //Update Task Effect
    // updateTask$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType(TaskActions.),
    //         mergeMap(action =>

    //         )
    //     )
    // )
}