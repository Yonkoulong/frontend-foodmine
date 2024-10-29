import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'food-mine-welcome',
    templateUrl: './food-mine-welcome.component.html',
    styleUrls: ['./food-mine-welcome.component.scss']
})
export class FoodMineWelcomeComponent {
    private routes = inject(Router);

    getStarted() {
        this.routes.navigateByUrl("panda/home");
    }
}