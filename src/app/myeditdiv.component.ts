import { Component,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { PrimeCar } from './mydatatable.component';
import {Message} from 'primeng/primeng';


@Component({
    selector: 'myeditdiv',
    templateUrl: `
                    <div>
                        <button type="button" pButton (click)="save()" icon="fa-floppy-o"></button>
                        <button type="button" pButton (click)="cancel()" icon="fa-undo"></button>
                    </div>
    `
})
export class MyEditComponent implements OnInit {
    @Input() car:PrimeCar={};
    // @Output() send1RowEditing:EventEmitter<boolean>=new EventEmitter();
    @Output() showHover:EventEmitter<any>=new EventEmitter();
    @Output() sendTable1:EventEmitter<any>=new EventEmitter();
    inEditing:boolean=false;
    msgs: Message[] = [];

    ngOnInit(){


    }
    save(){

        this.showHover.emit();
     }
    cancel(){
        this.showHover.emit();
    }


}
