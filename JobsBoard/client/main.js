// Template.registerHelper('showinformation', function(){
// 	return Jobs.find().fetch().reverse();
// });

// Template.registerHelper('showinformation', function(){
// 	return Application.find().fetch().reverse();
// });

// Template.registerHelper('User',function(){
// 	return Meteor.user();
// })

// Add this to the html document
// {{#if $eq User._id owner}}
// {{/if}}

// Template.registerHelper('getImg', function(picture){
// 	return Images.findOne(picture).url()
// 	console.log()
// })

// Template.masterLayout.rendered =  function(){
// 	Novelty.NiceScroll();
// 	console.log('ran')
// }

Template.registerHelper('getcvurl', function(_id){
	f = Files.findOne(_id);
	return f.url();
})

// Template.registerHelper('getFileName', function(_id){
// 	f = Files.findOne(_id);
// 	return f.name();
// })

Template.jobDetails.events({
	'click #sendmail': function (event, template) {
		// event.preventDefault();
		console.log("hey you")
		Meteor.call('sendEmail');
		// alert(Files.findOne(this.uploadCV))
	}
});

// Template.jobs.events({
// 	'click #showemail': function(_id){
// 		_id = Jobs.findOne(_id);
// 		console.log("hey show email")
// 	}
// });