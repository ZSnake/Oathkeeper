import { Template } from 'meteor/templating';
 
import './navbar.html';

Template.navbar.events({
    'click a#signoutButton': function(event){
        console.log('alksdfmlaksmdf');
    },
});