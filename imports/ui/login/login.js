import './login.html';
import { Materialize } from 'meteor/materialize:materialize';


Template.login.events({
    'click #loginButton'(event){
        Meteor.loginWithPassword($('#email').val(), $('#password').val(), function(error){
            if(error){
                Materialize.toast("El correo electrónico y/o contraseña que has introducido son incorrectos.", 4000);
            }else{
                Router.go('/');
            }
        })
    }
})