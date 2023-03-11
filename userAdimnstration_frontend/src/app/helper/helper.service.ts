import {Injectable} from '@angular/core';

declare const require: any;

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  /**
   *
   */
  constructor() {
  }

  public getDateUTC(d: any) {
    return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString();
  }

  public getDateUTCD(d: any) {
    return new Date(d.getTime() - (d.getTimezoneOffset() * 60000));
  }

}
