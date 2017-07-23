import { Mongo } from 'meteor/mongo';

export const Companies = new Mongo.Collection('companies');

const CompanySchema = new SimpleSchema({
	name: { type: String }
});

Companies.attachSchema(CompanySchema);

 Meteor.methods({
    'companies.insert'(text) {
      // check(text, String);
 
     // Make sure the user is logged in before inserting a task
     // if (! Meteor.userId()) {
     //   throw new Meteor.Error('not-authorized');
     // }
 
     companies.insert({
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
   
 });