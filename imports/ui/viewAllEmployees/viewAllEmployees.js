import { Template } from 'meteor/templating';
 
import './viewAllEmployees.html';
 
Template.viewAllEmployees.helpers({
  employees: [
      {
          name: "Sylvanna",
          age: 24, 
          status: true
      },
      {
          name: "Rylai",
          age: 21, 
          status: false
      },
      {
          name: "Traxex",
          age: 29, 
          status: true
      },
      {
          name: "Lanaya",
          age: 24, 
          status: true
      },
      {
          name: "Lina",
          age: 27, 
          status: true
      },
      {
          name: "Tresdin",
          age: 32, 
          status: true
      }
  ]
});