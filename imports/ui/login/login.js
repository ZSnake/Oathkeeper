import './login.html';

Template.login.events({
    'click #loginButton'(event){
        Meteor.loginWithPassword($('#email').val(), $('#password').val(), function(){
            console.log(Meteor.user());
            Router.go('/');
        })
    }
})