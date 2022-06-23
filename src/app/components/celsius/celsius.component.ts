import { Component, OnInit } from '@angular/core';
import { ConvertionService } from 'src/app/services/convertion.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit {

  // proprietà
  value: number = 0;

  constructor(private convServ: ConvertionService) {
    // sottoscrizione alla funzione
    // funzione che osserva il comportamento della variabile e modifica il valore
    convServ.value.subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
  }

  ngOnInit(): void {
  }

  // funzione che aggiorna il valore del service al valore inserito nell'input
  valueChanged():void{
    this.convServ.value.next(this.value);
  }

}
