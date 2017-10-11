import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }

  stringToObjectPath(obj, path){
    try{
        return path.
                replace('[', '.').replace(']','').
                split('.').
                reduce(
                    (obj, property) => {
                        return obj[property];
                    }, obj
                );

    } catch (err) {
        return null;
    }
  }

}
