Router.configure({
	layoutTemplate: "masterLayout",
	loadingTemplate: "loadingTemplate",
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
	waitOn: function(){
		Meteor.subscribe('jobs')
	},
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

	waitOn: function(){
		var _id = this.params._id;
		console.log(_id);
		return
		[
		Meteor.subscribe('jobDetails',_id)
		
		]
	},
	data: function(){
		var _id = this.params._id;
		return{ 
			job: Jobs.findOne(_id),
			applications: Applications.find({job: _id}).fetch(),
		}
	}
})


Router.route('/about', function () {
	this.render('cardLayout');
}, {
	name: 'about'
});

Router.route('/dashboard', function () {
	this.render('dashboard');
}, {
	name: 'dashboard',
	data: function(){
		return {
			jobs: Jobs.find().fetch().reverse()
		}
	}
});

Router.route('/dashboard/job/applications/:_id', function(){
	this.render('viewapplications');
},
{
	name: 'viewapplications',
	waitOn: function(){
		var _id = this.params._id;
		Meteor.subscribe('applications',_id)
	},
	data: function(){
		var _id = this.params._id;
		return{ 
			job: Jobs.findOne(_id),
			applications: Applications.find({job: _id}).fetch()

		}
	}
})
// Router.route('/dashboard/:_id/applications', function(){
// 	this.render('viewapplications');
// },{
// 	name: 'viewapplications'
// 	var _id = this.params._id;
// 	return {
// 		applications: Applications.find({job:_id})
// 	}
// }
// });


// Router.route('/jobDetails', function(){
// 	waitOn:{
// 		Meteor.subscribe 'images';
// 	},
// });