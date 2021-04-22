import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() graphLabels: Label[];
  @Input() barDataSet: ChartDataSets[];
  @Input() doughnutDataSet:ChartDataSets[];
  @Input() chartType: ChartType ;
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
    this.chartClick.emit({event,active})
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }){
    this.chartHover.emit({event,active})
  }


}
