import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted = false;
  messages: any[] = [];

  // property injection
  // private service: MyFirstService = inject(MyFirstService)

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length ? true : false;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  deleteMessage(i: number) {
    this.service.deleteMessages(i);
  }
}
