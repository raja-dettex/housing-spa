import {Component} from '@angular/core';

@Component({
  selector:'app-propertyCardComponent',
  templateUrl: './property-card.component.html',
  styleUrls:['./property-card.component.css'],

})
export class propertyCardComponent{
property: any = {
  id:1,
  name: "birla house",
  type: "house",
  price: 120000
}
}
