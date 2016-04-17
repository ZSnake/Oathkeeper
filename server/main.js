import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees/employees.js';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


Meteor.startup(() => {
    let employees = seedEmployees();
    console.log('startup');
    let em = Employees.find({});
    console.log(em.count());
    if(em.count() === 0){
        for(let i = 0; i < employees.length; i++){
            console.log(Employees);
            Employees.insert(employees[i]);
        }
    }
});

let seedEmployees = () => {
    return [
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
}
