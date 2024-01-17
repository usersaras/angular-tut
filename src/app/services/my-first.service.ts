import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'A',
      email: 'a@a.com',
      message: 'Hello world!',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessages(index: number): void {
    this.messages.splice(index, 1);
  }
}
