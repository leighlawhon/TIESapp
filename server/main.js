import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/api/employees'
import { SkillsList } from '../imports/api/skills_list'
import { Companies } from '../imports/api/companies'

Meteor.startup(() => {
  Meteor.publish('employees', function(){
  	return Employees.find({});
  })
  Meteor.publish('skills_list', function(){
  	return SkillsList.find({});
  })
  Meteor.publish('companies', function(){
  	return Companies.find({});
  })
});
