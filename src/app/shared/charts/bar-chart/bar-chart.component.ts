import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, TimeScale } from 'chart.js';
import 'chartjs-adapter-moment';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = ['2021', '2022'];
  selectedYear:string = new Date().getFullYear().toString()
  selectedMonth:string = new Date().getMonth().toString()
  filterdBy: string = 'year';
  // chartData = []
  data = [{
    x: new Date(2021, 3, 30),
    y: 1
  },
  {
    x: new Date(2021, 8, 30),
    y: 3
  },
  {
    x: new Date(2021, 7, 30),
    y: 2
  },
  {
    x: new Date(2021, 5, 30),
    y: 7
  },
  {
    x: new Date(2021, 3, 22),
    y: 4
  },
  {
    x: new Date(2021, 11, 30),
    y: 5
  },
  {
    x: new Date(2021, 12, 30),
    y: 3
  },
  {
    x: new Date(2021, 4, 30),
    y: 2
  },
  {
    x: new Date(2021, 2, 24),
    y: 4
  }]
  barChart!: any

  constructor() {


  }

  ngOnInit(): void {
    this.barChart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        scales: {
          x: {
              type: 'time',
              time: {
                  unit: 'month'
              }
          }
      }
      },
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'School 1',
            data: this.data,
            backgroundColor: 'rgba(20,200,10,0.4)',
            borderColor: 'rgba(20,200,10,0.4)'
          }
        ]
      }
    });
  }
  onMonthChange(month:any) {
// console.log(e);
    // filter data to this month
    this.setMainData()
    
    this.barChart.data.datasets[0].data = this.barChart.data.datasets[0].data.filter((el:any) =>   {
      return (el.x.getMonth() + 1) == +month
      
    })
    this.changeLabelsToDay(month)
    console.log(this.barChart.data.datasets[0].data);
    
    this.barChart.update()



  }
  setMainData() {
    this.barChart.data.datasets[0].data = this.data
  }
  changeLabelsToDay(month:any) {
    const daysInMonth =  new Date(+this.selectedYear, month, 0).getDate()
    const labels = Array(daysInMonth).fill(1).map((el,i) => i+1)
    console.log(labels);
    this.barChart.data.datasets[0].data = labels.forEach(el => {})
    console.log(this.barChart.data.datasets[0].data);
    /** TO Do Later */
    
    
    this.barChart.options.scales.x.time.unit = 'day'
    this.barChart.update()
  }
  onYearChange(e:any) {
console.log(e);

  }

  onFilterChange(e:any) {
    this.filterdBy = e
  }

}
function randomDate(start:Date, end:Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
