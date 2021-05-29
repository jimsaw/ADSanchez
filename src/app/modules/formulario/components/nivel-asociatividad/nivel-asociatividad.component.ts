import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nivel-asociatividad',
  templateUrl: './nivel-asociatividad.component.html',
  styleUrls: ['./nivel-asociatividad.component.css']
})
export class NivelAsociatividadComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
