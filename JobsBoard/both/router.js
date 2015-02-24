Router.configure({
	layoutTemplate: "masterLayout",
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/jobs', function () {
	this.render('jobs');
}, {
	name: 'jobs',
	data: function(){
		return {
			jobs: Jobs.find().fetch().reverse()
		}
	}
});
//==============
// Router.route('/projects/userId/projects', function(){
// 	this.render('projects');
// },
// {
// 	name:'projectsCategory',
// 	data: function(){
// 		return {
// 			projects: Jobs.find({Meteor.userId: this.params.Meteor.userId()).fetch().reverse(),
// 				pageTitle: 'projects:' + this.params.userId
// 			}
// 		}

// 	});
//===================

Router.route('/jobs/:category/', function(){
	this.render('jobs');
},
{
	name:'jobsCategory',
	data: function(){
		return {
			jobs: Jobs.find({category: this.params.category}).fetch().reverse(),
			pageTitle: 'category:' + this.params.category
		}
	}

});

Router.route('/jobs/details/:_id', function(){
	this.render('jobDetails');
},
{
	name: 'jobDetails',
	data: function(){
		var _id = this.params._id;
		return{
			jobs: Jobs.findOne(_id)
		}
	}
})


Router.route('/about', function () {
	this.render('cardLayout');
}, {
	name: 'about'
});