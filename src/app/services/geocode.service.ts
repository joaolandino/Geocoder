import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { ServicesList } from './services.config';
import { HelpersService } from './helpers.service';

@Injectable()
export class GeocodeService {

  constructor(
    private _http: Http,
    private _helpers: HelpersService
  ) { }

  geocode(_address: string = null){
    let response = Observable.of({ 'result': '', 'address': '', 'lat': '', 'lng': '' });

    for(let i = 0; i < ServicesList.length; i++){

      // Verifica qual serviço está disponível para receber +1 request
      if( ServicesList[i].requests < ServicesList[i].maxPerDay ){
        ServicesList[i].requests++;

        // Create URL
        let url = ServicesList[i].url
                  .replace('{KEY}', ServicesList[i].key)
                  .replace('{ADDRESS}', _address);

        // Make request and put response in a new object
        response = this._http.get(url)
                  .map(
                    _response => {
                      return {
                        'result': 'success',
                        'address': this._helpers.stringToObjectPath(_response.json(), ServicesList[i].returnTree.address),
                        'lat': this._helpers.stringToObjectPath(_response.json(), ServicesList[i].returnTree.lat),
                        'lng': this._helpers.stringToObjectPath(_response.json(), ServicesList[i].returnTree.lng)
                      }
                    }
                  );

        // Stop the loop when request is done
        break;
      }

    }

    // Return response of request or Observable.of()
    return response;
  }

}
