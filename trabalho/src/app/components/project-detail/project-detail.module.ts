import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectDetailComponent]
})
export class ProjectDetailModule {}