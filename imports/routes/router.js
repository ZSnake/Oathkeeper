import { Router } from 'meteor/iron:router'
import {Employees} from '../api/employees/employees.js'
import {Materialize} from 'meteor/materialize:materialize';
import '../ui/viewAllEmployees/viewAllEmployees.js';
import '../ui/employeeDetails/employeeDetails.js';
import '../ui/layout/layout.js';
import '../ui/register/register.js';
import '../ui/login/login.js';


// Router.onBeforeAction(function() {
// 	if (Meteor.userId()) {
// 		this.go('/');
//         Materialize.toast('Acceso denegado', 4000);
// 	} else {
// 		this.next();
// 	}
// }, {
// 	only: ['login', 'register']
// });

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

Router.route('/register', function () {
  this.render('register');
});

Router.route('/login', function () {
  this.render('login');
});