import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacion-familia',
  templateUrl: './informacion-familia.component.html',
  styleUrls: ['./informacion-familia.component.css']
})
export class InformacionFamiliaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
