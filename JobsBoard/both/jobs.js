Jobs = new Mongo.Collection('jobs');
Jobs.attachSchema(new SimpleSchema({

	jobtitle: {
		type: String,
		label: "Title",
		max: 200
	},
	jobsdescription: {
		type: String,
		label: "Brief summary",
		optional: true,
		max: 1000,
		autoform: {
			rows: 5
		}
	},
	contactinformation: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Contact Email"
	}

}));