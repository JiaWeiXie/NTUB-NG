import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  _el: HTMLElement;
  @Input() color = '#1E88E5';
  constructor(el: ElementRef) {
    this._el = el.nativeElement;
   }

  @HostListener('mouseenter')
  onmouseenter() {
    this._el.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this._el.style.backgroundColor = '#F44336';
  }
}
