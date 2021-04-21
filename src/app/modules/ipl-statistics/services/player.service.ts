import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../ipl-player-model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl=environment.apiUrl;
   }

   getPlayersStats():Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseUrl}/playerStatistics`)
   }
}
