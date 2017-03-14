"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var datatabledemo_component_1 = require('./datatabledemo.component');
var mydatatable_component_1 = require('./mydatatable.component');
var mydate_pipe_1 = require('./mydate.pipe');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
// import { DataTableModule, SharedModule } from 'primeng/primeng';
var datatable_1 = require('../../components/datatable/datatable');
var shared_1 = require('../../components/common/shared');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var carservice_1 = require('./service/carservice');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                datatabledemo_component_1.DataTableCrudDemo,
                mydatatable_component_1.MyDataTable,
                mydate_pipe_1.MyDatePipe,
                datatable_1.DataTableModule,
                shared_1.SharedModule
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_4.ButtonModule,
                primeng_1.MessagesModule,
                primeng_2.InputTextModule,
                primeng_3.PasswordModule,
                forms_1.ReactiveFormsModule,
                // DataTableModule,
                // SharedModule,
                primeng_5.DialogModule,
                primeng_6.SliderModule,
                primeng_7.DropdownModule,
                primeng_8.CalendarModule,
                primeng_9.GrowlModule
            ],
            providers: [carservice_1.CarService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
