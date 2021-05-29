import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cacao-cnn',
  templateUrl: './cacao-cnn.component.html',
  styleUrls: ['./cacao-cnn.component.css']
})
export class CacaoCNNComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
