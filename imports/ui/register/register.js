import './register.html';
import { Material } from 'meteor/materialize:materialize';
import { Template } from 'meteor/templating';

Template.register.onRendered(function(){
    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 100,
        max: new Date(),
        closeOnSelect: true,
        closeOnClear: true,
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
        Accounts.createUser(user, function(error){
            if(error){
                Materialize.toast('User already exists');
            }else{
                Router.go('/');
            }
            
        });
    }
});