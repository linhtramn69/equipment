import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OptionsComponent } from './components/options/options.component'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//Service
import { TableComponent } from './components/table/table.component';
import { EquipmentServiceService } from './services/equipment/equipment-service.service';
import { EquipmentComponent } from './pages/manager/equipment/equipment.component';
import { EquipmentDetailComponent } from './pages/manager/equipment-detail/equipment-detail.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';
import { EquipmentCreateComponent } from './pages/manager/equipment-create/equipment-create.component';
import { EquipmentTypeComponent } from './pages/manager/equipment-type/equipment-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EquipmentComponent,
    OptionsComponent,
    TableComponent,
    EquipmentDetailComponent,
    EquipmentCreateComponent,
    EquipmentFormComponent,
    EquipmentTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
    
  ],
  providers: [EquipmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
