import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-origen-plantas',
  templateUrl: './origen-plantas.component.html',
  styleUrls: ['./origen-plantas.component.css']
})
export class OrigenPlantasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
