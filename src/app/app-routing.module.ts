import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentCreateComponent } from './pages/manager/equipment-create/equipment-create.component';
import { EquipmentDetailComponent } from './pages/manager/equipment-detail/equipment-detail.component';
import { EquipmentComponent } from './pages/manager/equipment/equipment.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentComponent },
  { path: '', component: EquipmentComponent },
    { path: 'equipment/create', component: EquipmentCreateComponent },
  { path: 'equipment/:id', component: EquipmentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
