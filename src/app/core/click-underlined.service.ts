import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickUnderlinedService {
  private _activeItem = signal<string | null>(null);

  activeItem = this._activeItem.asReadonly();

  setActive(item: string) {
    this._activeItem.set(item);
  }
}