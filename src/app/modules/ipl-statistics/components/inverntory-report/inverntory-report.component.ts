import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { InventoryReport, StockByBranches } from '../../ipl-player-model';
import { ChartArea, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-inverntory-report',
  templateUrl: './inverntory-report.component.html',
  styleUrls: ['./inverntory-report.component.scss']
})
export class InverntoryReportComponent implements OnInit {
  inventoryReport: InventoryReport[];
  inventoryReportDataSet: ChartDataSets[];
  topInventoryDataSet: ChartDataSets[];
  inventoryGraphLabels: Label[];
  inventoryGraphLegend = true;
  inventoryGraphType: ChartType = 'pie';
  pieChartColor: Color[];
  inventoryGraphOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: true
    },
    layout: {
      padding: {
        top: 30,
        right: 0,
        bottom: 100,
        left: 200,
      }
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
      outlabels: {
        text: '%p %l',
        color: 'white',
        stretch: 45,
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18
        }
      }
    },
    legend: {
      position: "right",
      display: true,
      labels: {
         fontColor: "black",
        },
    },

  };

  constructor(private inventoryService: PlayerService) { }

  ngOnInit(): void {
    this.getInventoryReport();
  }

  getInventoryReport() {
    let productName: string[] = [];
    let sockInHand: number[] = [];
    let topProductWithInventoryAge:number[]=[];

    this.inventoryService.getInventoryReport().subscribe((inventoryReport: InventoryReport[]) => {
      this.inventoryReport = inventoryReport;

      this.inventoryReport.map((inventoryReport: InventoryReport) => {
        productName.push(inventoryReport.name);
        this.inventoryGraphLabels = [...productName];
        sockInHand.push(inventoryReport.stock.total_available_stock);

        inventoryReport.stock.stock_by_branches.map((stockInHand: StockByBranches) => {
          topProductWithInventoryAge.push(stockInHand.stock_in_hand);
        });

        this.topInventoryDataSet=[{data:[...topProductWithInventoryAge]}]
        this.inventoryReportDataSet = [{ data: [...sockInHand] }];
        this.pieChartColor = [{ backgroundColor: ['#33567F', '#F0CB69', '#CCD5E6', '#8EC3A7', '#5FB7E5'] }];
      });
    }, (err) => { });
  }
}
