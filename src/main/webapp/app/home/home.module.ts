import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jh671SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jh671SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jh671HomeModule {}
