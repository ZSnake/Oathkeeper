import { Template } from 'meteor/templating';
import './navbar.html';

Template.navbar.events({
    'click #signoutButton'(event){
        Meteor.logout();
    },
});