import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-injertacion',
  templateUrl: './injertacion.component.html',
  styleUrls: ['./injertacion.component.css']
})
export class InjertacionComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
