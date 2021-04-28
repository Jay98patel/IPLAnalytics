import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PlayerService } from '../../services/player.service';
import { SalesByBrands } from '../../ipl-player-model';

@Component({
  selector: 'app-sales-team-performance',
  templateUrl: './sales-team-performance.component.html',
  styleUrls: ['./sales-team-performance.component.scss']
})
export class SalesTeamPerformanceComponent implements OnInit {
  salesDataSet:ChartDataSets[];
  salesGraphLabels:Label[];
  salesGraphLegend:true;
  salesGraphType: ChartType ='pie';
  pieChartColor:Color[];
  heigth:number=400;
  width:number=300;

  salesGraphOptions:ChartOptions={
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
        right: 10,
        bottom: 150,
        left: 0,
      }
    },
    legend: {
      position: "right",
      display: true,
      align: "start",
      labels: {
        boxWidth: 12,
        padding: 5,
        fontColor: "black"
      },
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      }
    }
  }
  constructor(private reportService:PlayerService) { }

  ngOnInit(): void {
    this.getSalesTeamReport();
  }

  getSalesTeamReport(){
    let sale_percent:number[]=[];
    let productName:string[]=[];
    this.reportService.getSalesByBrandReport().subscribe((salesByBrands:SalesByBrands[])=>{
      salesByBrands.map((sales:SalesByBrands)=>{

        productName.push(sales.name);
        this.salesGraphLabels=[...productName];
        sale_percent.push(sales.sales_percent);
        this.salesDataSet=[{data:[...sale_percent]}]
      })
    });
  }

}
