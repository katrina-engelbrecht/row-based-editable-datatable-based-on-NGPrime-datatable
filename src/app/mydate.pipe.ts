import { Pipe, PipeTransform } from '@angular/core';
/*
since I convert the output of p-calendar from date to string
so we don't need this pipe in the any more. by Katrina on 10.02.2017
 */
@Pipe({name: 'mydate'})
export class MyDatePipe implements PipeTransform {
    transform(value: any): string {
        let type=typeof value;
        if(type==="object") {
            let year = value.getFullYear().toString();
            let month = value.getMonth().toString();
            if (month.length === 1)
                month = "0" + month;
            let date = value.getDate().toString();
            if (date.length === 1)
                date = "0" + date;
            return date+"."+month+"."+year;
        }else
            return value;


    }
}
