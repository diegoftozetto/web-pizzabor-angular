import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pizzaborSrcDebounce]'
})
export class SrcDebounceDirective {

  @Input()
  public pizzaborSrcDebounce?: string;

  constructor(
  ) {
  }

  @HostBinding('attr.src')
  public get src(): string {
    return this.pizzaborSrcDebounce || '';
  }

}
