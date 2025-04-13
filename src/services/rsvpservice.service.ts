import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';


@Injectable({
  providedIn: 'root'
})
export class RSVPServiceService {

  private dataURL = 'assets/players.json'
  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<HttpResponse<any>>{
    return this.http.get<any>(this.dataURL, { observe: 'response'});
  }

  getConfirmed(players: Player[]): Player[] {
    return players.filter(p => p.rsvp === 'Yes');
  }

  getCounts(players: Player[]) {
    const total = players.length;
    const confirmed = players.filter(p => p.rsvp === 'Yes').length;
    const declined = players.filter(p => p.rsvp === 'No').length;

    return { total, confirmed, declined };
  }
}
