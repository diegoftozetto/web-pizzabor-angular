import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[pizzaborSrcDebounce]'
})
export class SrcDebounceDirective implements OnChanges, OnDestroy {

  private srcDebounced: string = '';

  private src$: Subject<string> = new Subject();

  private subUnsubscribe: Subject<void> = new Subject();

  @Input()
  public pizzaborSrcDebounce?: string;

  constructor(
  ) {
    this.src$.pipe(
      takeUntil(this.subUnsubscribe),
      debounceTime(500),
    ).subscribe(
      (src: string) => this.srcDebounced = src,
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.pizzaborSrcDebounce) {
      this.src$.next(this.pizzaborSrcDebounce);
    }
  }

  public ngOnDestroy(): void {
    this.subUnsubscribe.next();
    this.subUnsubscribe.complete();
  }

  @HostBinding('attr.src')
  public get src(): string {
    return this.srcDebounced;
  }

}
