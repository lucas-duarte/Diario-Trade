import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeJournalService {

  constructor(public httpClient: HttpClient) {}

  ReturnDate(){

    return {
      date: ""
    }
    //this.httpClient.get("").subscribe();

  }

}


