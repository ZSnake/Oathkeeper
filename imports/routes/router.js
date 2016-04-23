import { Router } from 'meteor/iron:router'
import {Employees} from '../api/employees/employees.js'

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('viewAllEmployees');
});

Router.route('/employee/:_id', function () {
  var employee = Employees.findOne({_id: this.params._id});
  this.render('employeeDetails', {data: employee});
});