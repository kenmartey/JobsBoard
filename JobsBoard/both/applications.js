Applications = new Mongo.Collection('application');
Applications.attachSchema(new SimpleSchema({

	fullName: {
		type: String,
		label: "FullName",
		max: 200
	},
	briefSummary: {
		type: String,
		label: "Why do you want this Job",
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
		type: Number,
		label: "Phone Number"
		
	},
	uploadCV: {
		type: String,
		label: "UploadCV"
	},

	picture: {
		type: String,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images'
			}
		},
		label: 'Choose file'
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
	job: {
		type: String,
		autoform: {
			omit: true
		}
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			if (this.isInsert){
				return Meteor.userId();
			}
		}
	},

}));