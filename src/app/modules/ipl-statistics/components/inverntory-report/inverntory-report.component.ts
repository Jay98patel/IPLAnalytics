import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { InventoryReport, StockByBranches } from '../../ipl-player-model';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, } from 'ng2-charts';

@Component({
  selector: 'app-inverntory-report',
  templateUrl: './inverntory-report.component.html',
  styleUrls: ['./inverntory-report.component.scss']
})
export class InverntoryReportComponent implements OnInit {
  customLegends: string[] = [];
  inventoryReport: InventoryReport[];
  inventoryReportDataSet: ChartDataSets[];
  topInventoryDataSet: ChartDataSets[];
  inventoryGraphLabels: Label[];
  inventoryGraphLegend = true;
  inventoryGraphType: ChartType = 'pie';
  pieChartColor: Color[];
  otherLabelName: string[];
  otherStockInHand: number[] = [];
  heigth: number = 400;
  width: number = 300;

  inventoryGraphOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    tooltips: {
      enabled: true,
    },
    layout: {
      padding: {
        top: 50,
        right: 10,
        bottom: 150,
        left: 0,
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
        color: 'black',
        stretch: 20,
        backgroundColor: "transparent",
        padding: {
          right: 30,
        },
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
        }
      },

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
  };

  constructor(private inventoryService: PlayerService) {
  }

  ngOnInit(): void {
    this.getInventoryReport();
  }

  getInventoryReport() {
    let productName: string[] = [];
    let sockInHand: number[] = [];
    let topProductWithInventoryAge: number[] = [];
    let LegendsLabels: string[] = [];
    let otherProductName: string[] = []
    let otherValue: number;
    this.pieChartColor = [{ backgroundColor: ['#33567F', '#F0CB69', '#CCD5E6', '#8EC3A7', '#5FB7E5'] }];
    this.inventoryService.getInventoryReport().subscribe((inventoryReport: InventoryReport[]) => {

      /**5 data will be in pie chart and other data are splice in this method */
      inventoryReport.slice(5, inventoryReport.length).map((inventrryName: InventoryReport) => {
        otherProductName.push(inventrryName.name);
        inventrryName.stock.stock_by_branches.map((otherStockInHand: StockByBranches) => {
          this.otherStockInHand.push(otherStockInHand.stock_in_hand);
        });
      });
      /**5 data will be in pie chart and other data are splice in this method */
      otherValue = this.otherStockInHand.reduce((a, b): number => a + b);              /*done summation of other values*/

      this.inventoryReport = inventoryReport.slice(0, 5);                              /**loop will run only till 5 */

      this.inventoryReport.map((inventoryReport: InventoryReport) => {
        this.customLegends.push(inventoryReport.name);                                 /**adding custom legends */

        productName.push(this.textWrap(inventoryReport.name));                         /**splice the text if more then 10 characters the ... will come */
        LegendsLabels = productName.slice(0, 5);                                       /**this data will visible in piechart */
        this.inventoryGraphLabels = [...LegendsLabels, 'others'];

        sockInHand.push(inventoryReport.stock.total_available_stock);

        inventoryReport.stock.stock_by_branches.map((stockInHand: StockByBranches) => { /**this is for first pie chart */
          topProductWithInventoryAge.push(stockInHand.stock_in_hand);
        });

        this.topInventoryDataSet = [{ data: [...topProductWithInventoryAge, otherValue] }];
        this.inventoryReportDataSet = [{ data: [...sockInHand, otherValue] }];
      });
    }, (err) => { });
  }

  textWrap(labelStr: string): string {
    return labelStr.length > 18 ? labelStr.slice(0, 18) + '...' : labelStr;
  }
}
