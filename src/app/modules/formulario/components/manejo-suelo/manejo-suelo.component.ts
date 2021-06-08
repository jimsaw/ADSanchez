import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manejo-suelo',
  templateUrl: './manejo-suelo.component.html',
  styleUrls: ['./manejo-suelo.component.css']
})
export class ManejoSueloComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
