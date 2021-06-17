import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditPupilComponent } from './edit-pupil/edit-pupil.component';
import { PupilsTabelComponent } from './pupils-tabel/pupils-tabel.component';

const routes: Routes = [
  { path: 'pupils', component: PupilsTabelComponent },
  { path: 'pupils/:id', component: EditPupilComponent }
]

@NgModule({
  declarations: [
    PupilsTabelComponent,
    EditPupilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports:[RouterModule]
})
export class PupilsModule { }
