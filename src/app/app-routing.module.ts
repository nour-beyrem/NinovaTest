import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IotComponent } from './iot/iot.component';
import { PicComponent } from './pic/pic.component';

const routes: Routes = [{path: '', component: AppComponent},{path: 'iot', component: IotComponent},{ path: 'machine', component: PicComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
