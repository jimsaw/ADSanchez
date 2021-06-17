import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cosecha',
  templateUrl: './cosecha.component.html',
  styleUrls: ['./cosecha.component.css']
})
export class CosechaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  periodosTumba: string[] = ["CADA 8 DÍAS", "CADA 15 DÍAS", "CADA MES"];

  opciones: string[] = ["SI", "NO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
