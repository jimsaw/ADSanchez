import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practicas-agricolas',
  templateUrl: './practicas-agricolas.component.html',
  styleUrls: ['./practicas-agricolas.component.css']
})
export class PracticasAgricolasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
