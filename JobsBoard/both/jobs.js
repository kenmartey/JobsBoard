Jobs = new Mongo.Collection('jobs');
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
	
}));