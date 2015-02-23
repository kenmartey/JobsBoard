Job = function(doc) {
	_.extend(this, doc);
};

_.extend(Job.prototype, {
	owned: function(){
		return Meteor.userId() == this.owner;
	}
});

Jobs = new Mongo.Collection('jobs', {
	transform: function(doc) { return new Job(doc)}
});
Jobs.attachSchema(new SimpleSchema({

	title: {
		type: String,
		label: "Title",
		max: 200
	},
	
	description: {
		type: String,
		label: "Brief summary",
		optional: true,
		max: 1000,
		autoform: {
			rows: 5
		}
	},
	contactInformation: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Contact Email"
	},

	category: {
		type: String,
		autoform:{
			options: function(){
				return [{

					label: "JavaScript",
					value: "javaScript"
				},{
					label: "Html",
					value: "html"
				},{

					label: "Meteor",
					value: "meteor"
				},{

					label: "Kitchen Staff",
					value: "kitchen staff"
				},{
					label: "Administrative Staff",
					value: "administrative staff"
				},{

					label: "Driver",
					value: "driver"
				}
				]
			}
		}

	},

	// createdby:{

	// 	options: function(){
	// 		createdby: currentUserId
	// 		return currentUserId;
	// 	}
	// },

// 	userId: {
// 		autoValue: function() {
// 			return Meteor.userId;

// 		}
// 	},
owner: {
	type: String,
	autoform: {
		omit: true
	},
	autoValue: function(){
		return Meteor.userId();
	}
}
}));
