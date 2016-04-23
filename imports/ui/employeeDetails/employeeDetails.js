import { Template } from 'meteor/templating';
 
import './employeeDetails.html';



Template.employeeDetails.rendered = function(){
    $('#calendar').fullCalendar({
        // put your options and callbacks here
    });
};

