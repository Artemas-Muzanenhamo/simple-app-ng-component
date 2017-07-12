
import {Component} from '@angular/core';
import {Item} from '../checkout/item';
import {IntroService} from "./intro.service";

@Component({
  selector: 'app-introduction',
  templateUrl: '../intro/intro.component.html',
  providers: [IntroService],
  styleUrls: ['../../app/app.component.css']
})
export class IntroductionComponent {

  items: Item[];

   model = new Item('dog', 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');

   submitted = false;

   onSubmit() {
     this.submitted = true;
     this.add(this.model);
   };

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // Instantiate the Intro Service
  constructor (private introService: IntroService) { }

  add(item: Item): void {
    this.introService.addItems(item)
      .then()
  }

}
