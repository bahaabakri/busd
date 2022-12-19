import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  faFilter} from  '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'table-header-filter',
  templateUrl: './table-header-filter.component.html',
  styleUrls: ['./table-header-filter.component.scss']
})
export class TableHeaderFilterComponent {
  faFilter = faFilter
  isFiltersOpened: boolean = false
  programs:any[] = []
  levels:any[] = []
  @Input('title') title!:string
  @Input('wihtoutFilter') wihtoutFilter!:boolean
  @Input('userId') userId!:string|null
  constructor() {
    this.programs = ['x3', 'x4', 'xXx', 'xGold']
    this.levels = Array(12).fill(1).map((el,i) => el+i)
  }

  applyFilter(filterForm: NgForm) {
    console.log(filterForm.value);
    

  }
  clearFilter(filterForm: NgForm) {
    filterForm.reset()
  }
  toggleFiltersSlide() {
    this.isFiltersOpened = !this.isFiltersOpened
  }
}
