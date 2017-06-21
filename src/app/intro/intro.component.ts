
import {Component} from '@angular/core';
import {Item} from '../checkout/item';

@Component({
  selector: 'app-introduction',
  templateUrl: '../intro/intro.component.html',
  styleUrls: ['../../app/app.component.css']
})
export class IntroductionComponent {

   model = new Item('dog', 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');

   submitted = false;

   onSubmit() {this.submitted = true};

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
