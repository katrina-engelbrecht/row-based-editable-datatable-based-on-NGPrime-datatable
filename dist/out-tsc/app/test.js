var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CarService } from './service/carservice';
export var MyDataTable = (function () {
    function MyDataTable(carService) {
        this.carService = carService;
        this.car = new PrimeCar();
    }
    MyDataTable.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.brands = [];
        this.brands.push({ label: 'All Brands', value: null });
        this.brands.push({ label: 'Audi', value: 'Audi' });
        this.brands.push({ label: 'BMW', value: 'BMW' });
        this.brands.push({ label: 'Fiat', value: 'Fiat' });
        this.brands.push({ label: 'Honda', value: 'Honda' });
        this.brands.push({ label: 'Jaguar', value: 'Jaguar' });
        this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
        this.brands.push({ label: 'Renault', value: 'Renault' });
        this.brands.push({ label: 'VW', value: 'VW' });
        this.brands.push({ label: 'Volvo', value: 'Volvo' });
    };
    MyDataTable.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    };
    MyDataTable.prototype.save = function () {
        if (this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;
        this.car = null;
        this.displayDialog = false;
    };
    MyDataTable.prototype.delete = function () {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    };
    MyDataTable.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    MyDataTable.prototype.cloneCar = function (c) {
        var car = new PrimeCar();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    MyDataTable.prototype.findSelectedCarIndex = function () {
        return this.cars.indexOf(this.selectedCar);
    };
    /**
     * for datepicker column filter
     * @param event
     * @param dt
     * @param colField
     * @param colFilterMatchMode
     */
    MyDataTable.prototype.onSelectCalendarInputPrimeng = function (event, dt, colField, colFilterMatchMode) {
        console.log('entro on select');
        var stringDateFilter = this.dateFilter.toISOString().slice(0, 10);
        dt.filter(stringDateFilter, colField, colFilterMatchMode);
    };
    MyDataTable.prototype.onBlurCalendarInputPrimeng = function (event, dt, colField, colFilterMatchMode) {
        console.log('entro a blur');
        var beforeDateFilter = this.dateFilter;
        if (!this.dateFilter || this.dateFilter == null) {
            console.log('entro a reset');
            dt.filter('', colField, colFilterMatchMode);
        }
        this.dateFilter = beforeDateFilter;
    };
    MyDataTable = __decorate([
        Component({
            selector: 'my-datatable',
            templateUrl: './mydatatable.component.html',
            styleUrls: ['./mydatatable.component.css']
        }), 
        __metadata('design:paramtypes', [CarService])
    ], MyDataTable);
    return MyDataTable;
}());
export var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
    return PrimeCar;
}());
//# sourceMappingURL=D:/WebstormProjects/primeng-quickstart-cli/src/app/test.js.map