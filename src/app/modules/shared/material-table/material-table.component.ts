import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';


@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit, AfterViewInit {


  @Input() columnsInfo: ColumnInfo[] = [];

  @Input() elementData: any[];

  @Input() isLoading: boolean;

  @Output() rowTrashcanClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  onItemSelected(event): void {
    this.rowClicked.emit(event.selected[0]);
  }

  onTrashCanClicked(event, row): void {
    event.stopPropagation();
    this.rowTrashcanClicked.emit(row);
  }

}
