import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CrudComponent } from './ogranism/crud/crud.component';
import { IconComponent } from './cell/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './tissue/table/table.component';
import { IconBarComponent } from './tissue/icon-bar/icon-bar.component';
import { PagignationComponent } from './tissue/pagignation/pagignation.component';
import { LoginComponent } from './ogranism/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './ogranism/register/register.component';
import { IconService } from '../services/icons/icon.service';
import { SearchBarComponent } from './tissue/search-bar/search-bar.component';
import { ItemUpdateComponent } from './tissue/item-update/item-update.component';
import { CardListComponent } from './tissue/card-list/card-list.component';
import { CardThumbComponent } from './tissue/card-thumb/card-thumb.component';
import { CardGalleryComponent } from './tissue/card-gallery/card-gallery.component';
import { CardDetailComponent } from './tissue/card-detail/card-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CrudComponent,
    IconComponent,
    TableComponent,
    IconBarComponent,
    PagignationComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ItemUpdateComponent,
    CardListComponent,
    CardThumbComponent,
    CardGalleryComponent,
    CardDetailComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    CrudComponent,
    TableComponent,
    IconBarComponent,
    PagignationComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    ItemUpdateComponent,
    CardListComponent,
    CardThumbComponent,
    CardGalleryComponent,
    CardDetailComponent,
  ],
  providers:[
    IconService
  ]
})
export class AlloymobileLibraryModule { }
