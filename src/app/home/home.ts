import {Component} from 'angular2/angular2';

import {MessageService} from '../common/models/models';

@Component({
  selector: 'home',
  styles: [`
  `],
  directives: [  ],
  template: `
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ body }}
    </p>
    <hr>

    <div>

      <h2 class="text-error">
        Home: {{ messageService.getMessage() }}
      </h2>
      <form class="form-inline" (ng-submit)="updateMessage(message)">
        <input type="text" class="form-control" placeholder="Message" [(ng-model)]="message">
        <button type="submit" class="btn btn-default">
          Update Message
        </button>
      </form>

    </div>
  `
})
export class Home {
  title: string = 'Home Page';
  body:  string = 'This is the home body';
  message: string = '';
  constructor(public messageService: MessageService) {
    this.message = messageService.getMessage();
  }

  updateMessage(m) {
    this.messageService.setMessage(m);
  }


}

export const HOME_DIRECTIVES = [
  Home
];
