import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FmIconModule } from '@food-mine-fe/shared';
import { FoodMineClientShellComponent } from './food-mine-client-shell.component';
import { FoodMineClientHomeComponent, FoodMineClientMenuDetailComponent, FoodMineClientNotifyComponent, FoodMineClientOrderComponent } from '@food-mine-fe/food-mine-client/feature';
import { FoodMineClientBannerComponent, FoodMineClientBestSellerComponent, FoodMineClientFeaturesComponent }  from '@food-mine-fe/food-mine-client/feature';
import { FoodMineClientMenuComponent } from '@food-mine-fe/food-mine-client/ui';

const routes: Routes = [
  {
    path: '',
    component: FoodMineClientShellComponent,
    children: [
      {
        path: 'home',
        component: FoodMineClientHomeComponent,
      },
      {
        path: 'menu',
        component: FoodMineClientMenuDetailComponent
      },
      {
        path: 'order',
        component: FoodMineClientOrderComponent
      },
      {
        path: 'notify',
        component: FoodMineClientNotifyComponent
      },
    ],
  },
];

const pages = [FoodMineClientHomeComponent, FoodMineClientMenuDetailComponent, FoodMineClientOrderComponent, FoodMineClientNotifyComponent];

const components = [FoodMineClientBannerComponent, FoodMineClientFeaturesComponent, FoodMineClientBestSellerComponent, FoodMineClientMenuComponent];

@NgModule({
  declarations: [FoodMineClientShellComponent, ...pages, ...components],
  imports: [CommonModule, RouterModule.forChild(routes), FmIconModule],
  exports: [FoodMineClientShellComponent],
  providers: [],
})
export class FoodMineClientShellModule {}
