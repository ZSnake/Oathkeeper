import { Template } from 'meteor/templating';
 
import './sidebar.html';

Template.sidebar.onRendered(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});