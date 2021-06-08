import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cacao-nacional',
  templateUrl: './cacao-nacional.component.html',
  styleUrls: ['./cacao-nacional.component.css']
})
export class CacaoNacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
