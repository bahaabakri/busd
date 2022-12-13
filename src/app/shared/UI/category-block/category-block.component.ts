import { AfterViewInit, Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss']
})
export class CategoryBlockComponent implements OnChanges, AfterViewInit {

  @Input('cat') cat! : string;
  @Input('busd') busd! : number;
  @Input('allBlocksNumber') allBlocksNumber! : number;;
  @Input('activesBlocksNumber') activesBlocksNumber! : number;;
  @Input('color') color! : string;

  // @ViewChild('element') element!: ElementRef;
  allBlocksArray: any[] | undefined
  activesBlocksArray: any[] | undefined

  constructor(private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.allBlocksArray = Array(this.allBlocksNumber).fill(0);
    this.activesBlocksArray = [...Array(this.activesBlocksNumber).fill(1), ...Array((this.allBlocksNumber as number) - (this.activesBlocksNumber as number)).fill(0)]
    // console.log(this.allBlocksArray);
    // console.log(this.activesBlocksArray);
    
  
  
  }
  ngAfterViewInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
  }

}
