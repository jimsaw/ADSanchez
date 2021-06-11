import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ColumnInfo } from 'src/app/interfaces/columnInfo';
import { Database } from 'src/app/interfaces/database';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T> implements OnInit {

  selectedItem: T;
  columnsInfo: ColumnInfo[];
  isTableLoading: boolean = true;
  data: T[] = [];
  dataSubscription: Subscription = null;

  dataService: Database<T>;

  constructor(
    private snackBarObj: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataSubscription?.unsubscribe();
    this.dataSubscription = this.dataService.list().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.isTableLoading = false;
    });
  }

  onItemSelected(event: any): void {

  }

  onAddClicked(): void {

  }

  async onTrashCanClicked(row): Promise<void> {
    console.log(row);
    // const result = await this.deleteConfirmationDialog.openDialog().toPromise();
    await this.deleteData(row);
  }

  async deleteData(item: T): Promise<void> {
    try {
      const message = await this.dataService.delete(item);
      this.snackBarObj.open(message, 'Cerrar', {
        duration: 5000,
      });
    } catch (e) {
      this.snackBarObj.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

}
