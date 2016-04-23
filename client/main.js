import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Employees } from '../imports/api/employees/employees.js';
import { Events } from '../imports/api/events/events.js';

import './main.html';
import '../imports/ui/viewAllEmployees/viewAllEmployees.js';
import '../imports/ui/navbar/navbar.js';
import '../imports/ui/sidebar/sidebar.js';
import '../imports/ui/employeeDetails/employeeDetails.js';
import '../imports/ui/layout/layout.js';
import '../imports/routes/router.js';

