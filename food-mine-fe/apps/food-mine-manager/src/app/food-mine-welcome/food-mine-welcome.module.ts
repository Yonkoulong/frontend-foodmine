import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { FoodMineWelcomeComponent } from "./food-mine-welcome.component";
import { CommonModule } from "@angular/common";

const routes: Route[] = [
    {
        path: '',
        component: FoodMineWelcomeComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [FoodMineWelcomeComponent]
})
export class FoodMineWelcomeModule {}