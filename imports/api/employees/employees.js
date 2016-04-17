export const Employees = new Mongo.Collection('employees');

let Schema = {};
Schema.employee = new SimpleSchema({
  name: {
    type: String,
    max: 100,
  },
  age: {
    type: Number,
  },
  available: {
    type: Boolean,
    defaultValue: true,
  },
});

Employees.attachSchema(Schema.employee);