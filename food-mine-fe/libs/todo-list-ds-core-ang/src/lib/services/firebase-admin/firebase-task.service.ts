import { Injectable } from "@angular/core";
import { DatabaseReference, get, getDatabase, limitToFirst, orderByKey, push, query, ref, remove, startAt, update } from 'firebase/database';
import { from, map, Observable } from "rxjs";
import { Task } from '@food-mine-fe/todo-list-ds-core-ang';

@Injectable({
    providedIn: 'root'
})
export class FirebaseTaskService {
    private db = getDatabase();

    //Create a new task
    createTask(task: Task.TaskItem): Observable<DatabaseReference> {
        const tasksRef = ref(this.db, `/${Task.Entities.TaskList}`);
        return from(push(tasksRef, task));
    }

    //Get all tasks
    getTasks(paginationParams: Task.PaginationParams): Observable<Task.TaskList> {
        const tasksRef = ref(this.db, `/${Task.Entities.TaskList}`);
        const tasksQuery = query(tasksRef, orderByKey(), startAt(paginationParams.from.toString()), limitToFirst(paginationParams.size));

        return from(get(tasksQuery)).pipe(
            map(snapshot => {
                const items: Task.TaskItem[] = [];
                snapshot.forEach(childSnapshot => {
                    items.push({ id: childSnapshot.key!, ...childSnapshot.val() });
                })

                return {
                    totalItems: items.length,
                    totalPages: Math.ceil(items.length / paginationParams.size),
                    items
                }
            })
        )
    }

    // Update a task
    updateTask(taskId: string, updates: Partial<Task.TaskItem>): Observable<void> {
        const taskRef = ref(this.db, `/${Task.Entities.TaskList}/${taskId}`);
        return from(update(taskRef, updates));
    }

    // Delete a task
    deleteTask(taskId: string): Observable<void> {
        const taskRef = ref(this.db, `/${Task.Entities.TaskList}/${taskId}`);
        return from(remove(taskRef));
    }

    // Create a category
    createCategory(cateogry: Task.Category): Observable<DatabaseReference> {
        const categoryRef = ref(this.db, `/${Task.Entities.TaskCategory}`);
        return from(push(categoryRef, cateogry));
    }

    // Get all tasks
    getCategories(): Observable<Task.Category[]> {
        const categoriesRef = ref(this.db, `/${Task.Entities.TaskCategory}`);

        return from(get(categoriesRef)).pipe(
            map(snapshot => {
                const items: Task.Category[] = [];
                snapshot.forEach(childSnapshot => {
                    items.push({ id: childSnapshot.key!, ...childSnapshot.val() });
                });

                return items;
            })
        )
    }
}