import { Mongo } from 'meteor/mongo';

export const Skills = new Mongo.Collection('skills_list');

const SkillSchema = new SimpleSchema({
  // qa:{type: Array},
  // code:{type: Object},
  // art:{type: Array},
  // assets:{type: Object},
  // business:{type: Object},
  // ops:{type: Object},
  // hardware:{type: Array},
  // cultural:{type: Object},
  // reseach:{type: Object},
  // data:{type: Array}

});

Skills.attachSchema(SkillSchema);

 Meteor.methods({
    'Skills.insert'(text) {
      // check(text, String);
 
     // Make sure the user is logged in before inserting a task
     // if (! Meteor.userId()) {
     //   throw new Meteor.Error('not-authorized');
     // }
 
     Skills.insert({
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
   // 'Skills.remove'(taskId) {
   //   check(taskId, String);
 
   //   Skills.remove(taskId);
   // },
   // 'Skills.setChecked'(taskId, setChecked) {
   //   check(taskId, String);
   //   check(setChecked, Boolean);
 
   //   Skills.update(taskId, { $set: { checked: setChecked } });
   // },
 });