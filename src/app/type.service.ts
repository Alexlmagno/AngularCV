import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  type: String = 'Eng';
  types: String[] = ['Eng', 'Mus'];

  constructor() { }

  getType(): String {
    return !!this.type ? this.type : this.types[0];
  }

  changeType(newType?: any): void {
    this.type = !!newType ? newType: this.takeOther(this.type);
  }

  takeOther(actual: String): String {
    const index = this.types.findIndex((element) => element === this.type);
    return this.types[index === 0 ? 1 : 0];
  }
}
