import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees'

Meteor.startup(() => {
  Meteor.publish('employees', function(){
  	return Employees.find({});
  })
});
