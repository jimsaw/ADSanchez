import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incrementar-productividad',
  templateUrl: './incrementar-productividad.component.html',
  styleUrls: ['./incrementar-productividad.component.css']
})
export class IncrementarProductividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
