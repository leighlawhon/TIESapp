import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SkillsList = new Mongo.Collection('skills_list');

const SkillSchema = new SimpleSchema({
  qa:{type: Object},
  code:{type: Object},
  art:{type: Object},
  assets:{type: Object},
  business:{type: Object},
  ops:{type: Object},
  hardware:{type: Object},
  cultural:{type: Object},
  reseach:{type: Object},
  data:{type: Object}

});

SkillsList.attachSchema(SkillSchema);

Meteor.methods({
  //   'SkillsList.insert'(text) {
  //     // check(text, String);
 
  //    // Make sure the user is logged in before inserting a task
  //    // if (! Meteor.userId()) {
  //    //   throw new Meteor.Error('not-authorized');
  //    // }
 
  //    SkillsList.insert({
  //      	team,
		// first_name,
		// last_name,
		// javascript,
		// css,
  //     	createdAt: new Date(),
  //      	owner: Meteor.userId(),
  //      	username: Meteor.user().username,
  //    });
   // },
   // 'SkillsList.remove'(taskId) {
   //   check(taskId, String);
 
   //   SkillsList.remove(taskId);
   // },
   // 'SkillsList.setChecked'(taskId, setChecked) {
   //   check(taskId, String);
   //   check(setChecked, Boolean);
 
   //   SkillsList.update(taskId, { $set: { checked: setChecked } });
   // },
 });