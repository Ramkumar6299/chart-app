import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DougnutChartComponent } from './dougnut-chart/dougnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"line-chart",
    component:LineChartComponent
  },
  {
    path:"bar-chart",
    component:BarChartComponent
  },
  {
    path:"dougnut-chart",
    component:DougnutChartComponent
  },
  {
    path:"radar-chart",
    component:RadarChartComponent
  },
  {
    path:"pie-chart",
    component:PieChartComponent
  },
  {
    path:"bubble-chart",
    component:BubbleChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
