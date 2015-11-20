/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Route, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {About} from './about/about';
import {Home} from './home/home';
import {Experiment} from './experiment/experiment';


import {MESSAGES_PROVIDERS} from './common/models/models';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [
    MESSAGES_PROVIDERS
  ],
  directives: [
    ROUTER_DIRECTIVES
  ],
  styles: [`
    header {
      height: 64px;
      background: #fff;
      position: fixed;
      header: 0;
      left: 0;
      width: 100%;
    }

    header h1#logo {
      float: left;
      margin: 0;
    }

    header h1#logo a {
      background: url(assets/images/logo.png) no-repeat top left;
      width: 194px;
      height: 48px;
      margin: 8px;
      display: block;
      text-indent: -9999px;
    }

    header .color {
      display: block;
      height: 4px;
      position: absolute;
      top: 100%;
      width: 100%;
    }

    header #menu {
      float:left;
      padding:17px 40px 0 0;
    }

    #container {
      padding:100px 20px 20px 20px;
    }

    .color {
      background-color: rgba(195, 30, 30, 0.9) !important;
    }

    .shadow {
      background: url(assets/images/top-shadow.png) repeat-x;
      height: 35px;
      position: fixed;
      top: 68px;
      width: 100%;
    }
  `],
  template: `

  <header>
    <h1 id="logo">
      <a href="#/home"></a>
    </h1>

    <div id="menu">
      <a [router-link]=" ['Home'] " class="btn btn-default">Home</a>
      <a [router-link]=" ['About'] " class="btn btn-default">About</a>
      <a [router-link]=" ['Experiment'] " class="btn btn-default">Experiment</a>
    </div>

    <div class="color"></div>
    <div class="clear"></div>
  </header>

  <div class="shadow"></div>
  <div id="container">
    <router-outlet></router-outlet>
  </div>

  <footer id="container">
    WebPack Angular 2 Starter by <a href="https://twitter.com/AngularClass">@AngularClass</a>
  </footer>
  `
})
@RouteConfig([
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/experiment', component: Experiment, name: 'Experiment' }
])
export class App {
  constructor() {

  }


}

