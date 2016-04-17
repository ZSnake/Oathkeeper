import { Template } from 'meteor/templating';
 
import './viewAllEmployees.html';
import {Employees} from '../../api/employees/employees.js'

Template.viewAllEmployees.helpers({
    employees() {
        return Employees.find({});
    },
  
});