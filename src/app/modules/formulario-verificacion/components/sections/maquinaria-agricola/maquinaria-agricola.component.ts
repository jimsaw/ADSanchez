import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-maquinaria-agricola',
  templateUrl: './maquinaria-agricola.component.html',
  styleUrls: ['./maquinaria-agricola.component.css']
})
export class MaquinariaAgricolaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
