import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DataTableCrudDemo} from './datatabledemo.component';
import {MyDataTable} from './mydatatable.component';
import {MyHoverComponent} from './myhoverdiv.component';
import {MyEditComponent} from './myeditdiv.component';

import {MyDatePipe} from './mydate.pipe';

import { MessagesModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
// import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DataTableModule } from './datatable';
import { SharedModule} from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';





import { CarService } from './service/carservice';

@NgModule({
  declarations: [
    AppComponent,
    DataTableCrudDemo,
    MyDataTable,
    MyDatePipe,
    MyHoverComponent,
    MyEditComponent
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
})
export class AppModule { }
