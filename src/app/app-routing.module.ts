import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AccessComponent } from "./access/access.component";
import { RouterModule, Routes } from "@angular/router";
import { CodeViewerComponent } from './code-viewer/code-viewer.component';


const appRoute: Routes = [
    { path: 'access', component: AccessComponent},
    { path: 'code', component: CodeViewerComponent},
    { path: '**', redirectTo: '/access', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoute, {
                enableTracing: true
            },
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {} 
