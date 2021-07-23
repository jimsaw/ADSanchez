import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('0px 0px 4px 6px rgba(68,138,255,0.54)', '10px');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }
  
  private highlight(shadow: string, my: string) {
    this.elementRef.nativeElement.style.boxShadow = shadow;
    this.elementRef.nativeElement.style.marginTop = my;
    this.elementRef.nativeElement.style.marginBottom = my;
  }

}
