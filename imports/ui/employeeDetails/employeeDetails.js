import { Template } from 'meteor/templating';
import { Events } from '../../api/events/events.js';
import './employeeDetails.html';



Template.employeeDetails.rendered = function(){
    var currentEmployee = this.data;    
    $('#calendar').fullCalendar({
        events: Events.find({employeeId: currentEmployee._id.toString()}).fetch(),
        dayClick: function(date, jsEvent, view) {
            var newEvent = {title: "Will be current user", start: date.add(1, 'days')._d, allDay: true, employeeId: currentEmployee._id.toString()};
            Events.insert(newEvent);
            console.log(newEvent.start);
            $('#calendar').fullCalendar('renderEvent', newEvent);
        }
    });
};

