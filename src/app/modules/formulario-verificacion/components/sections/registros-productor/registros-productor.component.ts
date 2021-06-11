import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registros-productor',
  templateUrl: './registros-productor.component.html',
  styleUrls: ['./registros-productor.component.css']
})
export class RegistrosProductorComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
