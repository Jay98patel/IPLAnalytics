import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InventoryReport, Player, SalesByBrands } from '../ipl-player-model';

@Injectable()
export class PlayerService {
  private baseUrl:string;

  constructor(private http:HttpClient) {
    this.baseUrl=environment.apiUrl;
   }

   getPlayersStats():Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseUrl}/playerStatistics`);
   }

   getInventoryReport():Observable<InventoryReport[]>{
     return this.http.get<InventoryReport[]>(`${this.baseUrl}/inventoryReport`);
   }

   getSalesByBrandReport():Observable<SalesByBrands[]>{
    return this.http.get<SalesByBrands[]>(`${this.baseUrl}/sales_by_brands`)
   }
}
