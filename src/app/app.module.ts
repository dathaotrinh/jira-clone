import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { KanbanComponent } from './main/kanban/kanban.component';

// Services
import { MainService } from './shared/main.service';

// Angular Materials
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SettingsComponent } from './main/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ng zorro
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule, Route, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

// breadcrumb
import {BreadcrumbModule} from 'angular-crumbs';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

registerLocaleData(en);

const routes: Routes = [
 {path: "project", component: MainComponent, data: { breadcrumb: "Project"}, children: [
    {path: "kanban-board", data: { breadcrumb: "Kanban Board"}, component: KanbanComponent},
    {path: "settings", data: { breadcrumb: "Settings"}, component: SettingsComponent}
 ]}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    KanbanComponent,
    SettingsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzBreadCrumbModule,
    BreadcrumbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MainService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
