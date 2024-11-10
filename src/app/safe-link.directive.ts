import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: { '(click)': 'onConfirmLeave($event)' },
})
export class SafeLinkDirective {
  constructor() {
    console.log('safe link is active');
  }

  onConfirmLeave(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      return;
    }

    event?.preventDefault();
  }
}
