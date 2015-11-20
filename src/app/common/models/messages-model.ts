import {Injectable} from 'angular2/angular2';

@Injectable()
export class MessageService {
  private _message: string = 'Hello Message';

  getMessage() {
    return this._message;
  }
  setMessage(m) {
    this._message = m;
    return this._message;
  }
}


export const MESSAGES_PROVIDERS = [
  MessageService
];
