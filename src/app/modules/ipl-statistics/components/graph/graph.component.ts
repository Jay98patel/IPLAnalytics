import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() graphLabels: Label[];
  @Input() barDataSet: ChartDataSets[];
  @Input() doughnutDataSet:ChartDataSets[];
  @Input() chartType: ChartType ;
  @Input() height:number;
  @Input() width:number;
  @Input() graphLegend;
  @Input() graphOptions: ChartOptions;
  @Input() graphColor:Color[];
  @Input() barChartPlugins = [pluginDataLabels];
  @Output() chartClick=new EventEmitter<{ event: MouseEvent, active: {}[] }>();
  @Output() chartHover=new EventEmitter<{ event: MouseEvent, active: {}[] }>();

  constructor() { }

  ngOnInit(): void {
  }

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }){
    this.chartClick.emit({event,active});
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }){
    this.chartHover.emit({event,active});
  }

  updateChart() {
   return this.chart.chart.update();
  }

}
