Router.onBeforeAction(function(pause) {
	if (!Meteor.user()) {
		// pause();
		alert("you need to be logged-in to view this page, Redirecting you to Home!")
		Router.go('\home');
	}
	else{
		this.next();
	}
}, {except: ['home','about','jobs', 'dashboard']});




AutoForm.addHooks(null,	{
	onError: function(operation,error,template){
		console.log('Error: ' + error);
	}
})
// Hooks for application
AutoForm.hooks({
	insertApplicationForm: {
		onSuccess: function(operation, result, template) {
			Router.go('jobs')
		},
		onError: function(operation, error, template) {
			alert(error)
		}
	}
});


AutoForm.hooks({
	insertApplicationForm: {
		formToDoc: function(doc, ss, formId) {
			console.log(doc);
			doc.job = Router.current().params._id;
			console.log(doc);
			return doc;
		}
	}
});

//User Id Hooks for jobs and  application
AutoForm.hooks({
	insertJobForm: {
		onSuccess: function(operation, result, template) {
			Router.go('jobs')
		},
		onError: function(operation, error, template) {
			alert(error)
		}
	}
});

