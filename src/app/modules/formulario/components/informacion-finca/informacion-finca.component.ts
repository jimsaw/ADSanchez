import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacion-finca',
  templateUrl: './informacion-finca.component.html',
  styleUrls: ['./informacion-finca.component.css']
})
export class InformacionFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
