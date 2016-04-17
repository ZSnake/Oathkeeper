import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees/employees.js';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


Meteor.startup(() => {
    let employees = seedEmployees();
    if(Employees.find({}).count() === 0){
        for(let i = 0; i < employees.length; i++){
            Employees.insert(employees[i]);
        }
    }
});

let seedEmployees = () => {
    return [
      {
          name: "Sylvanna",
          age: 24, 
          available: true
      },
      {
          name: "Rylai",
          age: 21, 
          available: false
      },
      {
          name: "Traxex",
          age: 29, 
          available: true
      },
      {
          name: "Lanaya",
          age: 24, 
          available: true
      },
      {
          name: "Lina",
          age: 27, 
          available: true
      },
      {
          name: "Tresdin",
          age: 32, 
          available: true
      }
  ]
}
