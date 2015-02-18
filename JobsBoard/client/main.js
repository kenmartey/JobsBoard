Template.registerHelper('showinformation', function(){
	return Jobs.find().fetch().reverse();
});