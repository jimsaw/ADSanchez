import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { EditAgricultorBodyComponent } from '../edit-agricultor-body/edit-agricultor-body.component';

@Component({
  selector: 'app-edit-agricultor-dialog',
  templateUrl: './edit-agricultor-dialog.component.html',
  styleUrls: ['./edit-agricultor-dialog.component.css']
})
export class EditAgricultorDialogComponent implements OnInit {

  @Input() agricultor: Agricultor;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditAgricultorBodyComponent, {
      panelClass: ['column', 'is-two-thirds'],
      data: this.agricultor,
      height: '100%',
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.agricultor = null;
    });
  }

}
