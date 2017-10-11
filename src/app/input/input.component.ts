import { Component, EventEmitter, Output } from '@angular/core';

import { GeocodeService } from '../services/geocode.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent{

  title: string = "Input";
  adresses: string[] = [];
  @Output() geocoded = new EventEmitter();

  constructor(
    private _geocodeService: GeocodeService
  ) { }

  inputSubmit(f){
    let _adresses = f.value.adresses;
    _adresses = _adresses.split('\n').map(_address => _address.trim());

    this.geocode(_adresses);
  }

  geocode(_adresses: string[]){

    let _this = this;

    _adresses.map(
      (_address, i) => {

        // Delay before next request
        setTimeout(function(x){
          return function(){

            _this._geocodeService.geocode(_address).subscribe(
              _data => {
                if(_data.result == ''){
                  console.log("Limit!");
                }else{
                  _this.geocoded.emit({adresses: _data});
                }
              }
            )

          };
        }(i), 1500 * i);

      }
    );

  }

}
