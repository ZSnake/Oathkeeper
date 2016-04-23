export const Events = new Mongo.Collection('events');

let Schema = {};
Schema.event = new SimpleSchema({
  title: {
    type: String,
    max: 100,
  },
  start: {
    type: Date,
  },
  allDay: {
    type: Boolean,
    defaultValue: true,
  },
  employeeId: {
      type: String,
      max: 50
  }
});

Events.attachSchema(Schema.event);