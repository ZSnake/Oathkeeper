import { Template } from 'meteor/templating';
import { Events } from '../../api/events/events.js';
import { Materialize } from 'meteor/materialize:materialize';
import './employeeDetails.html';



Template.employeeDetails.onRendered(function(){
    var currentEmployee = this.data;    
    $('#calendar').fullCalendar({
        events: Events.find({employeeId: currentEmployee._id.toString()}).fetch(),
        dayClick: function(date, jsEvent, view) {
            if(Meteor.user()){
                var newEvent = {title: Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName + "\n" + Meteor.user().emails[0].address, start: date.add(1, 'days')._d, allDay: true, employeeId: currentEmployee._id.toString()};
                Events.insert(newEvent);
                console.log(newEvent.start);
                $('#calendar').fullCalendar('renderEvent', newEvent);
            }else{
                Materialize.toast('Debe iniciar sesión para reservar', 3000, 'bottom');
            }
        }
    });
});

//read about publish and just publish to things needed