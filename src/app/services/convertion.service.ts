import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertionService {

  value: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  // funzione che trasforma i Celsius in Fahrenheit e lo ritorna come osservabile
  fahrenheitValue():Observable<number>{
    return this.value.pipe(
      map(v => (v * 9/5) + 32)
    )
  }

  // funzione che trasforma i Celsius in Kelvin e lo ritorna come osservabile
  kelvinValue():Observable<number>{
    return this.value.pipe(
      map(v => v + 273.15)
    )
  }

  // funzione che trasforma i Fahrenheit in Celsius e non ritorna niente
  nextFahrenheit(fValue:number):void{
    const newValue = (fValue - 32) * 5/9;
    this.value.next(newValue);
  }

  // funzione che trasforma i Kelvin in Celsius e non ritorna niente
  nextKelvin(kValue:number):void{
    const newValue = kValue - 273.15;
    this.value.next(newValue);
  }

}
