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
});

Events.attachSchema(Schema.event);