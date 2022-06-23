import { Component, OnInit } from '@angular/core';
import { ConvertionService } from 'src/app/services/convertion.service';

@Component({
  selector: 'app-kelvin',
  templateUrl: './kelvin.component.html',
  styleUrls: ['./kelvin.component.scss']
})
export class KelvinComponent implements OnInit {

  value: number = 0;

  constructor(private convServ: ConvertionService) {
    convServ.kelvinValue().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
   }

  ngOnInit(): void {
  }

  valueChanged(): void {
    this.convServ.nextKelvin(this.value);
  }

}
