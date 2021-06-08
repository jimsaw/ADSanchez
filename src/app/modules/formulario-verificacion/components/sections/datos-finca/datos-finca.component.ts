import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-finca',
  templateUrl: './datos-finca.component.html',
  styleUrls: ['./datos-finca.component.css']
})
export class DatosFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
