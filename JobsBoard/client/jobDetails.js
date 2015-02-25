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