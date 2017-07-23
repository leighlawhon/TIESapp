import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

const EmployeeSchema = new SimpleSchema({
	team: { type: String },
	first_name: { type: String },
	last_name: { type: String },
	javascript: { type: Number, defaultValue: 0 },
	css: { type: Number, defaultValue: 0 },
});

Employees.attachSchema(EmployeeSchema);

 Meteor.methods({
    'employees.insert'(text) {
      // check(text, String);
 
     // Make sure the user is logged in before inserting a task
     // if (! Meteor.userId()) {
     //   throw new Meteor.Error('not-authorized');
     // }
 
     Employees.insert({
       	team,
    		first_name,
    		last_name,
    		javascript,
    		css,
      	createdAt: new Date(),
       	owner: Meteor.userId(),
       	username: Meteor.user().username,
     });
   },
   // 'employees.remove'(taskId) {
   //   check(taskId, String);
 
   //   Employees.remove(taskId);
   // },
   // 'employees.setChecked'(taskId, setChecked) {
   //   check(taskId, String);
   //   check(setChecked, Boolean);
 
   //   Employees.update(taskId, { $set: { checked: setChecked } });
   // },
 });