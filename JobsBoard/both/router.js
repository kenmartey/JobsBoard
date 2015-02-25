Router.configure({
	layoutTemplate: "masterLayout",
	notFoundTemplate: '404'
	
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
// Router.route('/jobs/details/:_id', function(){
// 	this.render('applications');
// },
// {
// 	name:'applications',
// 	data: function(){
// 		return {
// 			applications: Applications.find().fetch()
// 		}
// 	}

// });
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

			job: Jobs.findOne(_id)			
		}
	}
})


Router.route('/about', function () {
	this.render('cardLayout');
}, {
	name: 'about'
});

// Router.route('/jobDetails', function(){
// 	waitOn:{
// 		Meteor.subscribe 'images';
// 	},
// });