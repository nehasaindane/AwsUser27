import { Component} from '@angular/core';
// import internal from 'stream';

@Component({
  selector: 'app-example1',
  template: `
    <p>My name is {{name}}</p>
    <p>Living in {{place}}</p>
    <p>My age is {{age}}</p>
    <p>Address - Street is {{address.street}}, House number is {{address.h_no}}, City is {{address.city}} </p>
    <h3>Hobbies are</h3>{{hobbies}}
    <h3>My daily Foods are : </h3>
      <ol>
      <li *ngFor="let food of foods">
      {{food}}
      </li>
      </ol> 

  `
  
})
export class Example1Component{
  name: string;
  place: string;
  age: any;
  address: any;
  hobbies: string[];
  foods: string[];
  constructor()
  {
    this.name= "Ankur",
    this.place="Meerut",
    this.address=
    {
      street:"Garh Road",
      h_no:10,
      city:"Meerut(UP)",
    }
    this.hobbies=["Cricket","Coin collection","Chess","Learning"],
    this.foods=["Biryani","Pasta","Burger","Egg"]
  }
  


 

}
