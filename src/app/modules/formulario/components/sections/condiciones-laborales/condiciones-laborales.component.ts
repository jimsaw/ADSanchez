import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condiciones-laborales',
  templateUrl: './condiciones-laborales.component.html',
  styleUrls: ['./condiciones-laborales.component.css']
})
export class CondicionesLaboralesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
