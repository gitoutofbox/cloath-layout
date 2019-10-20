import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[drop-down]'
})
export class DropDownDirective {
  dropdownToggleElem: any;
  dropdoeMenuElem: any;
  element: any;
  constructor(elem: ElementRef, private renderer: Renderer2) {
    this.element = elem.nativeElement;
  }


  @HostListener('blur') onBlur() {
    console.log('1233')
    this.renderer.removeClass(this.dropdoeMenuElem, 'show');
  }


  ngOnInit() {
    this.dropdownToggleElem = this.element.querySelector('.dropdown-toggle');
    this.dropdoeMenuElem = this.element.querySelector('.dropdown-menu');
  }
  ngAfterViewInit() {
    this.renderer.listen(this.element, 'blur', () => {
      console.log('asd')
      this.renderer.removeClass(this.dropdoeMenuElem, 'show');
    });


    this.renderer.listen(this.dropdownToggleElem, 'click', () => {
      if (this.dropdoeMenuElem.classList.contains('show')) {
        this.renderer.removeClass(this.dropdoeMenuElem, 'show');
      } else {
        this.renderer.addClass(this.dropdoeMenuElem, 'show');
      }

    });
  }

}
