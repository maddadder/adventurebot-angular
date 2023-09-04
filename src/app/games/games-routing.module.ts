import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ViewComponent } from './view/view.component'
import { AddEditComponent } from './add-edit/add-edit.component'

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'view/:id', component: ViewComponent },
            { path: 'add', component: AddEditComponent },
            { path: 'edit/:id', component: AddEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }