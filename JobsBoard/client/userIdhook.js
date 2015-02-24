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

