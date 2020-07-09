import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dougnut-chart',
  templateUrl: './dougnut-chart.component.html',
  styleUrls: ['./dougnut-chart.component.css']
})

export class DougnutChartComponent {

  dougnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  dougnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  dougnutChartType: ChartType = 'doughnut';

}
