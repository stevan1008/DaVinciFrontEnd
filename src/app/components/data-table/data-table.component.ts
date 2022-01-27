import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { UploadsService } from 'src/app/services/uploads.service';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule} from '@angular/cdk/table';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  datos: any = [];
  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Telefonos', 'Direccion','createdAt', 'updatedAt'];
  dataSource = this.datos;

  constructor(private uploadsService: UploadsService) { }

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos(){
    this.uploadsService.getDatos()
    .subscribe((res: any) => {
      console.log(res);
      this.datos = res
    })
   }

}
