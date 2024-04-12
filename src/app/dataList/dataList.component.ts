import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "../../types/Item";

@Component({
  selector: 'data-list',
  templateUrl: './dataList.component.html',
  styleUrls: ['./dataList.component.scss']
})
export class DataList implements OnInit {
  @Input() dataList: Item[];
  @Input() dataType: string;
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();


  ngOnInit() {
console.log("data ==> ",this.dataType);

  }

  deleteItem(idx: number) {
    this.onItemDelete.emit(this.dataList.splice(idx,1)[0])
    
  }
}
