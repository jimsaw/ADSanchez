import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cacao-nacional',
  templateUrl: './cacao-nacional.component.html',
  styleUrls: ['./cacao-nacional.component.css']
})
export class CacaoNacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  )
  { 
    this.form = this.formBuilder.group({
      areaTotalNacional: new FormControl(''),
      areaTotalNacionalViejo: new FormControl(''),
      edadCacaoViejo: new FormControl(''),
      brotesBasales: new FormControl(''),
      arbolesElite: new FormControl(''),
      areaTotalViejoInjertado: new FormControl(''),
      viejosInjertados: new FormArray([]),
      areaTotalNuevosClones: new FormControl(''),
      areaNuevosClones: new FormControl(''),
      edadNuevosClones: new FormControl(''),
      areaNuevosClones2: new FormControl(''),
      edadNuevosClones2: new FormControl(''),
      areaNuevosClones3: new FormControl(''),
      edadNuevosClones3: new FormControl(''),
      produccionAnioAnteriorCacaoNacional: new FormControl(''),
      precioPromedioXCacao: new FormControl('')
    });
    this.addViejoInjertado();
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  getFormArray(key: string): FormArray {
    return this.form.get(key) as FormArray;
  }

  createViejoInjertadoField(): FormGroup {
    return new FormGroup({
      areaViejoInjertado: new FormControl(''),
      edadViejoInjertado: new FormControl(''),
    });
  }

  addViejoInjertado(): void {
    this.getFormArray("viejosInjertados").push(this.createViejoInjertadoField());
  }

  deleteViejoInjertado(index: number): void {
    this.getFormArray("viejosInjertados").removeAt(index);
  }

}
