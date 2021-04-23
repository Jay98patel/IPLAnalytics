import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { InventoryReport } from '../../ipl-player-model';

@Component({
  selector: 'app-inverntory-report',
  templateUrl: './inverntory-report.component.html',
  styleUrls: ['./inverntory-report.component.scss']
})
export class InverntoryReportComponent implements OnInit {
  inventoryReport:InventoryReport[];

  constructor(private inventoryService:PlayerService) { }

  ngOnInit(): void {
    this.getInventoryReport();
  }
  
  getInventoryReport(){
    this.inventoryService.getInventoryReport().subscribe((inventoryReport:InventoryReport[])=>{
      this.inventoryReport=inventoryReport;
      console.log(this.inventoryReport)
    },(err)=>{})
    
  }

}
