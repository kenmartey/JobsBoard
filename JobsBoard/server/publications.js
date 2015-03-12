Meteor.publish('jobs', function(){
	return Jobs.find();
});

Meteor.publish('applications', function(_id){
	//picking the id of the job
	var job = Jobs.findOne(_id)
	// console.log(job)
	
	return Applications.find({job: _id});

});

Meteor.publish('images', function(){
	return Images.find();
});

Meteor.publish('files',function(){
	return Files.find();
});
Meteor.publish('jobDetails', function(_id){
	return Jobs.find({_id: _id});
});
