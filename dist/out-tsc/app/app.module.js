var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataTableCrudDemo } from './datatabledemo.component';
import { MyDataTable } from './mydatatable.component';
import { MyDatePipe } from './mydate.pipe';
import { MessagesModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { SliderModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { CarService } from './service/carservice';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                DataTableCrudDemo,
                MyDataTable,
                MyDatePipe
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                ButtonModule,
                MessagesModule,
                InputTextModule,
                PasswordModule,
                ReactiveFormsModule,
                DataTableModule,
                SharedModule,
                DialogModule,
                SliderModule,
                DropdownModule,
                CalendarModule,
                GrowlModule
            ],
            providers: [CarService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/WebstormProjects/primeng-quickstart-cli/src/app/app.module.js.map