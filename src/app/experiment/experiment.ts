import {Component, Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

import {MessageService} from '../common/models/models';

@Injectable()
export class ExperimentService {
  constructor(public http: Http) {

  }

  getExperiments() {
    return this.http
      .get('data/experiments.json')
      .map((res: Response) => res.json());
  }
}

@Component({
  selector: 'detail-experiment',
  styles: [`
    .experiment {
      cursor: pointer;
      outline: 1px lightgray solid;
      padding: 5px;
      margin: 5px;
    }
  `],
  template: `
    <div class="experiment" (click)="doExperiment()">
      <h3>{{ experiment.name }}</h3>
      <p>
        {{ experiment.description }}
      </p>
      <p>
        <strong>{{ experiment.completed }}</strong>
      </p>
    </div>
  `,
  inputs: ['experiment']
})
export class DetailExperiment {
  experiment: any;
  doExperiment() {
    this.experiment.completed++;
  }
}


@Component({
  selector: 'experiment',
  providers: [
    ExperimentService
  ],
  styles: [`
  `],
  directives: [
    DetailExperiment
 ],
  template: `
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <hr>

    <detail-experiment *ng-for="#data of experiments" [experiment]="data" ></detail-experiment>

    <hr>
    <div>
      <h2 class="text-error">
        Experiments: {{ messageService.getMessage() }}
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
export class Experiment {
  title: string = 'Experiment Page';
  body:  string = 'This is the experiment body';
  message: string = '';
  experiments: Array<Object> = [];
  constructor(
    public experimentsService: ExperimentService,
    public messageService: MessageService
  ) {
    this.message = messageService.getMessage();

  }

  onInit() {
    this.experimentsService.getExperiments()
      .subscribe((data: any) => {
        this.experiments = data
      });

  }

  updateMessage(m) {
    this.messageService.setMessage(m);
  }

}


