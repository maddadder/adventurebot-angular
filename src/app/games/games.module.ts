import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './games-routing.module';
import { LayoutComponent } from './layout.component';
import { ViewComponent } from './view/view.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    declarations: [
        LayoutComponent,
        ViewComponent,
        AddEditComponent
    ]
})
export class GamesModule { }