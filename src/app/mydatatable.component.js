"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// parse a date in dd.mm.yyyy format
function parseDate(input) {
    var parts = input.split('.');
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[2], parts[1] - 1, parts[0]); // Note: months are 0-based
}
var MyDataTable = (function () {
    function MyDataTable(carService) {
        this.carService = carService;
        this.msgs = [];
        this.car = new PrimeCar();
    }
    MyDataTable.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        //datasource imitation
        // this.carService.getCarsLarge().then(cars => {
        //     this.datasource = cars;
        //     this.totalRecords = this.datasource.length;
        //     this.cars = this.datasource.slice(0, 10);
        // });
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
    MyDataTable.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        var _this = this;
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.cars = _this.datasource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
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
        var dateFormat = require('dateformat');
        console.log('entro on select');
        var stringDateFilter = dateFormat(this.dateFilter, "dd.mm.yyyy");
        dt.filter(stringDateFilter, colField, colFilterMatchMode);
    };
    MyDataTable.prototype.onSelectCalendarInputForEditor = function (event, car, colfield) {
        var dateFormat = require('dateformat');
        var stringDate = dateFormat(event, "dd.mm.yyyy");
        car[colfield] = stringDate;
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
    /**
     * sort string as date with format 'dd.mm.yyyy'
     * @param event
     */
    MyDataTable.prototype.datesort = function (event) {
        console.log("datesort event begins");
        var comparer = function (a, b) {
            var sa = a['saleDate'];
            var sb = b['saleDate'];
            var isaempty = false, isbempty = false;
            if (sa === null || typeof sa === 'undefined')
                isaempty = true;
            if (sb === null || typeof sb === 'undefined')
                isbempty = true;
            if (isaempty && isbempty)
                return 0;
            else if (isaempty && !isbempty)
                return 1;
            else if (!isaempty && isbempty)
                return -1;
            else if (!isaempty && !isbempty) {
                var dateA = parseDate(a['saleDate']);
                var dateB = parseDate(b['saleDate']);
                if (dateA > dateB)
                    return 1 * event.order;
                else if (dateA < dateB)
                    return -1 * event.order;
                else if (dateA === dateB)
                    return 0;
            }
        };
        this.cars.sort(comparer);
    };
    MyDataTable.prototype.selectCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin });
    };
    MyDataTable = __decorate([
        core_1.Component({
            selector: 'my-datatable',
            templateUrl: './mydatatable.component.html',
            styleUrls: ['./mydatatable.component.css']
        })
    ], MyDataTable);
    return MyDataTable;
}());
exports.MyDataTable = MyDataTable;
var PrimeCar = (function () {
    function PrimeCar(vin, year, brand, color, saleDate) {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
        this.saleDate = saleDate;
    }
    return PrimeCar;
}());
exports.PrimeCar = PrimeCar;
