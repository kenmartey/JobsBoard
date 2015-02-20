Applications = new Mongo.Collection('application');
Applications.attachSchema(new SimpleSchema({

	fullName: {
		type: String,
		label: "Title",
		max: 200
	},
	briefSummary: {
		type: String,
		label: "Brief summary",
		optional: true,
		max: 1000,
		autoform: {
			rows: 2
		}
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Email"
	},
	contact: {
		type: String,
		label: "Phone Number"
	},
	uploadCV: {
		type: String,
		label: "UploadCV"
	},
	uploadImage: {
		type: String,
		label: "UploadImage"
	},
	qualification: {
		type: String,
		label: "Qualification",
		autoform:{
			options: function(){
				return [
				{label: "Bachelor of Science",value: "barchelor of science"},
				{label: "Bachelor of Arts", value: "barchelor of arts"},
				{label: "Masters", value: "Masters"},
				{label: "Phd", value: "phd"},
				{label: "Professor",	value: "professor"},
				{label: "Driver", value: "driver"}
				]
			}
		}
	},

}));