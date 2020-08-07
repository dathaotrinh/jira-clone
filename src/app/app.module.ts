import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { KanbanComponent } from './main/kanban/kanban.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './main/login/login.component';

// Services
import { MainService } from './shared/main.service';
import { ModalService } from './shared/modal.service';

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
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzListModule } from 'ng-zorro-antd/list';

// breadcrumb
import {BreadcrumbModule} from 'angular-crumbs';
import { ModalComponent } from './main/kanban/modal/modal.component';


//quill
import { QuillModule } from 'ngx-quill';
import { ItemBoxComponent } from './main/kanban/item-box/item-box.component'

registerLocaleData(en);

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
 {path: "project", component: MainComponent, data: { breadcrumb: "Project"}, children: [
    {path: "kanban-board", data: { breadcrumb: "Kanban Board"}, component: KanbanComponent},
    {path: "settings", data: { breadcrumb: "Settings"}, component: SettingsComponent}
 ]},
 {path: "login", component: LoginComponent, data: {breadcrumb: "Login"}}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    KanbanComponent,
    SettingsComponent,
    NavbarComponent,
    LoginComponent,
    ModalComponent,
    ItemBoxComponent
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
    NzAvatarModule,
    NzModalModule,
    NzIconModule,
    QuillModule,
    NzCommentModule,
    NzListModule,
    QuillModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [MainService, ModalService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
