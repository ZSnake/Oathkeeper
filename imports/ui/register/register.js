import './register.html';

import { Template } from 'meteor/templating';

Template.register.onRendered(function(){
    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 15 
    });
})

Template.register.events({
    'click #registerButton'(event){
        let profile = { 
            firstName: $('#first_name').val(),
            lastName: $('#last_name').val(),
            birthday: $('#birthday').val() 
        }
        let user = {
            username: $('#email').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            profile: profile
        }
        Accounts.createUser(user, function(){
            alert('user created');
        });
    }
})