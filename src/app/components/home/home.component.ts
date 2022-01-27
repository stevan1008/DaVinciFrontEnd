import { Component, OnInit } from '@angular/core';
import { UploadsService } from 'src/app/services/uploads.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: any = [];
  ultimoDato: any = {};

  constructor(private uploadsService: UploadsService) { }

  ngOnInit(): void {
    this.getDatos()
  }

  getDatos() {
    this.uploadsService.getDatos()
      .subscribe((res: any) => {
        this.datos = res;
        this.ultimoDato = res[res.length - 1];
      })
  }

}
