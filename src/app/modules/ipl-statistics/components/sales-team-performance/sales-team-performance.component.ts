import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PlayerService } from '../../services/player.service';
import { SalesByBrands } from '../../ipl-player-model';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-sales-team-performance',
  templateUrl: './sales-team-performance.component.html',
  styleUrls: ['./sales-team-performance.component.scss']
})
export class SalesTeamPerformanceComponent implements OnInit {
  @ViewChild(GraphComponent) graph: GraphComponent;
  salesDataSet: ChartDataSets[];
  salesGraphLabels: Label[];
  salesGraphLegend: true;
  
  salesGraphType: ChartType = 'pie';
  saleshorizontalGraph:ChartType='horizontalBar';
  pieChartColor: Color[];
  heigth: number = 400;
  width: number = 400;

  salesGraphOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 100,
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
    scales: {
      xAxes: [{
        display:false,
        gridLines: { display:false }
      }],
      yAxes: [{
        display:false,
        gridLines: {display:false }
      }]
    },
    plugins: {
      datalabels: {
        formatter: () => {
          return null;
        },
      },
      outlabels: {
        backgroundColor: "transparent",
        color: 'black',
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
          weight: 'normal'
        }
      }
    },
    // chart.update();
  }

  constructor(private reportService: PlayerService) { }

  ngOnInit(): void {
    this.getSalesTeamReport();
    setInterval(()=>{
      this.updateChart();
    },10000)
  }

  getSalesTeamReport() {
    let productName: string[] = [];
    let other_Sale_percent: number[] = [];
    let salePercentToBeShwon: number[] = [];
    let otherSaleValue: number;

    this.pieChartColor = [{ backgroundColor: ['#33567F', '#F0CB69', '#CCD5E6', '#8EC3A7', '#5FB7E5'] }];
    this.reportService.getSalesByBrandReport().subscribe((salesByBrands: SalesByBrands[]) => {

      salesByBrands.slice(0, 5).map((productNames) => {
        productName.push(productNames.name);
        salePercentToBeShwon.push(productNames.sales_percent);
      });
      this.salesGraphLabels = [...productName, 'Other'];

      salesByBrands.slice(5, salesByBrands.length).map((sale: SalesByBrands) => {
        other_Sale_percent.push(sale.sales_percent);
        otherSaleValue = other_Sale_percent.reduce((a, b): number => a + b);
      });

      this.salesDataSet = [{ data: [...salePercentToBeShwon, otherSaleValue] }];
    });
  }
  updateChart() {
    this.graph.updateChart()
    console.log(this.graph.updateChart())
  }
}