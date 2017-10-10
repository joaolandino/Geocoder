import { Component, OnInit } from '@angular/core';

import { GeocodeService } from '../services/geocode.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent{

  title: string = "Input";
  adresses: string[];

  constructor(
    private _geocodeService: GeocodeService
  ) { }

  inputSubmit(f){
    let _adresses = f.value.adresses;
    _adresses = _adresses.split('\n').map(_address => _address.trim());

    this.geocode(_adresses);
  }

  geocode(_adresses: string[]){

    _adresses.map(
      _address => {
        this._geocodeService.geocode(_address).subscribe(
          _data => {
            console.log(_data);
          }
        )
      }
    );

  }

}
