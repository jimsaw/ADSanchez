import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calidad-post-cosecha',
  templateUrl: './calidad-post-cosecha.component.html',
  styleUrls: ['./calidad-post-cosecha.component.css']
})
export class CalidadPostCosechaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
