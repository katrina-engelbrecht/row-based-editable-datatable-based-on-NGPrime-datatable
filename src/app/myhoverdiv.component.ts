import { Component,Input,Output,EventEmitter,OnInit,ElementRef} from '@angular/core';
import { PrimeCar } from './mydatatable.component';
import {Message} from 'primeng/primeng';
import * as $ from 'jquery';
@Component({
    selector: 'myhoverdiv',
    templateUrl: `
                   <div *ngIf="!inEditing && !otherRowInEditing">
                        <button type="button" pButton (click)="selectCar(car)" icon="fa-eye"></button>
                        <button type="button" pButton (click)="showEdit()" icon="fa-pencil-square-o"></button>
                   </div>
                   <div *ngIf="otherRowInEditing"></div>
    `
})
export class MyHoverComponent implements OnInit {
// <div>
// <span *ngIf="!inEditing">
// <button type="button" pButton (click)="selectCar(car)" icon="fa-eye"></button>
// <button type="button" pButton (click)="showEdit()" icon="fa-pencil-square-o"></button>
// </span>
// <span *ngIf="inEditing">
// <button type="button" pButton (click)="save()" icon="fa-floppy-o"></button>
// <button type="button" pButton (click)="cancel()" icon="fa-undo"></button>
//     </span>
//     </div>

    @Input() car:PrimeCar={};
    @Output() send1RowEditing:EventEmitter<boolean>=new EventEmitter();
    // @Output() sendTable:EventEmitter<PrimeCar>=new EventEmitter();
    @Output() sendTable1:EventEmitter<any>=new EventEmitter();
    @Input() otherRowInEditing:boolean=false;
    @Input() inEditing:boolean;
    msgs: Message[] = [];
    constructor(private ele:ElementRef){}
    ngOnInit(){
        this.inEditing=false;
    }
    showEdit(){
        //change this row to editing mode
        let parenttr=$(this.ele.nativeElement).closest('tr')[0];
        let alltdsintr=$(parenttr).find('td');
        for(var i=0;i<alltdsintr.length;i++){
            let mytd=alltdsintr[i];
            // $(mytd).click();
            $(mytd).addClass('ui-cell-editing');
        }
        this.inEditing=true;
        this.send1RowEditing.emit(true);
    }
    hideEdit(){
        //change this row to view mode
        let parenttr=$(this.ele.nativeElement).closest('tr')[0];
        let alltdsintr=$(parenttr).find('td');
        for(var i=0;i<alltdsintr.length;i++){
            let mytd=alltdsintr[i];
            // $(mytd).click();
            $(mytd).removeClass('ui-cell-editing');
        }
        this.inEditing=false;
        this.send1RowEditing.emit(false);
    }
    // save(){
    //     this.inEditing=!this.inEditing;
    //     // this.send1RowEditing.emit(false);
    // }
    // cancel(){
    //     this.inEditing=!this.inEditing;
    //     // this.send1RowEditing.emit(false);
    // }
    selectCar(car:PrimeCar) {
        // this.msgs = [];
        // this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + car.vin});
        //The first option to transfer object by event emitter
        // this.sendTable.emit(car);
        //another way: pass a json obj to other component
        this.sendTable1.emit({car:car});

    }

}
