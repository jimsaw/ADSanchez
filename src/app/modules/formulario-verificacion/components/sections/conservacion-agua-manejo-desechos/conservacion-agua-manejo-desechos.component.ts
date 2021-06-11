import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conservacion-agua-manejo-desechos',
  templateUrl: './conservacion-agua-manejo-desechos.component.html',
  styleUrls: ['./conservacion-agua-manejo-desechos.component.css']
})
export class ConservacionAguaManejoDesechosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
