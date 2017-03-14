"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/*
since I convert the output of p-calendar from date to string
so we don't need this pipe in the any more. by Katrina on 10.02.2017
 */
var MyDatePipe = (function () {
    function MyDatePipe() {
    }
    MyDatePipe.prototype.transform = function (value) {
        var type = typeof value;
        if (type === "object") {
            var year = value.getFullYear().toString();
            var month = value.getMonth().toString();
            if (month.length === 1)
                month = "0" + month;
            var date = value.getDate().toString();
            if (date.length === 1)
                date = "0" + date;
            return date + "." + month + "." + year;
        }
        else
            return value;
    };
    MyDatePipe = __decorate([
        core_1.Pipe({ name: 'mydate' })
    ], MyDatePipe);
    return MyDatePipe;
}());
exports.MyDatePipe = MyDatePipe;
