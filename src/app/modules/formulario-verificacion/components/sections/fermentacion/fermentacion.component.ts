import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fermentacion',
  templateUrl: './fermentacion.component.html',
  styleUrls: ['./fermentacion.component.css']
})
export class FermentacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
