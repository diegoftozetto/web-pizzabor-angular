import {
  Directive,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[pizzaborCardDesconto]'
})
export class CardDescontoDirective {

  @HostBinding('attr.title') titleDesconto: string = '';

  @Input()
  public pizzaborCardDesconto?: string;

  constructor(
  ) {
  }

  @HostListener('mouseover') mouseOver() {
    if (this.pizzaborCardDesconto) {
      const desconto = parseFloat(this.pizzaborCardDesconto) * 0.05;
      this.titleDesconto = "Desconto No Balcão: R$" + desconto.toFixed(2);
    }
  }

}
