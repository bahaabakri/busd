import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data = [1,3,5,6,8,11,15,16,19,22,26,30]
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.data,
        backgroundColor: 'rgba(41,49,77,.5)',
        borderColor: '#3b82f6',
        fill: 'origin',
      },

    ],
    labels: this.labels
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {
        display: false
      },
      y:
        {
          display: false,
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },

    plugins: {
      legend: { display: false },

    }
  };

  public lineChartType: ChartType = 'line';

  constructor() {

  }

}
