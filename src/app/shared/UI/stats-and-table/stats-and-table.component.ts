import { Component, ElementRef, ViewChild } from '@angular/core';
import {recent} from '../../../../_data/recent-activites'
import { faExternalLink, faCircleQuestion, faEye, faCopy, faLink } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'stats-and-table',
  templateUrl: './stats-and-table.component.html',
  styleUrls: ['./stats-and-table.component.scss']
})
export class StatsAndTableComponent {
  // titles:any[]
  recentItems;
  maxListElements:number
  faExternalLink = faExternalLink;
  faCircleQuestion = faCircleQuestion
  faeye = faEye
  faCopy = faCopy;
  faLink = faLink;
  constructor(private router:Router) {
    this.recentItems = recent
    this.maxListElements = 11
    // this.titles = []
    // console.log(this.recentItems);
    // this.makeTitle()
  }
  makeTitle() {
    // this.recentItems.forEach(element => {
      
      
    //   if (element.status === 'activites'){
    //     // console.log(element.status);
    //     this.titles.push( {
    //       icon: element.icon,
    //       title: `${element.id} activates ${element.category}`,
    //       time: element.time
    //     })

    //   } else if (element.status === 'addition') {
    //     this.titles.push({
    //       icon: element.icon,
    //       title: `${element.id} + ${element.busd} in ${element.category}`,
    //       time: element.time
    //     })

    //   } else if (element.status === 'newUser') {
    //     this.titles.push({
    //       icon: element.icon,
    //       title: `new user joned ${element.id}`,
    //       time: element.time
    //     })
    //   }
    // });
    // console.log(this.titles);
  }
  showMore() {
    this.maxListElements += 11;
  }
  navigateToUserDashboard(id:number) {
    this.router.navigate(['/pages'], {queryParams: { user: id }})
  }

}
