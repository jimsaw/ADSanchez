import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Injectable({
  providedIn: 'root'
})
export class ImportacionesService {
  csvRecords: any[] = [];

  constructor(private ngxCsvParser: NgxCsvParser) { }

  importarOneFormulario(file: any, header: boolean, delimeter: string) {
    this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Result', result);
        //Funcion para inicializar el objeto formularioLineaBase con valores vacios
        //Funcion para llenar los valores del objeto formularioLineaBase
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }
}
