import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manejo-suelo',
  templateUrl: './manejo-suelo.component.html',
  styleUrls: ['./manejo-suelo.component.css']
})
export class ManejoSueloComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  manejoSuelo: FormGroup;
  tipoSuelo;
  yesNoAnswer;
  maneraCorregirPH;
  productoXTipoQuimico;
  productoXTipoNatural;
  tipoProducto;


  constructor(private formBuilder: FormBuilder) {
    this.manejoSuelo = this.formBuilder.group({
      tipoSuelo: new FormControl(''),
      capacitacionTomaMuestrasSuelo: new FormControl(''),
      analisisSuelo: new FormControl(''),
      sueloPH: new FormControl(''),
      suelosNivelesAltosAcidez: new FormControl(''),
      corregidoPHSueloFinca: new FormControl(''),
      maneraCorregidoPHSuelo: new FormControl(''),
      tipoProducto: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.tipoSuelo = environment.constantes.formularioVerificacion.manejoSueloTipoSuelo;
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.maneraCorregirPH = environment.constantes.formularioVerificacion.manejoSueloManeraCorregirPH;
    this.productoXTipoQuimico = environment.constantes.formularioVerificacion.manejoSueloTipoProductoQuimico;
    this.productoXTipoNatural = environment.constantes.formularioVerificacion.manejoSueloTipoProductoNatural;
  }

  onSubmit() {

  }

  loadTipoProdcuto(event: any) {
    if (event.value === 'QUIMICO') {
      this.tipoProducto = 'QUIMICO';
    } else {
      this.tipoProducto = 'NATURAL';
    }
  }
}
