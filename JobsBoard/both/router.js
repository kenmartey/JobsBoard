Router.configure({
	layoutTemplate: "masterLayout",
	
})

Router.route('/', function(){
	this.render('home');
},
{
	name: 'home'
});

Router.route('/projects', function () {
	this.render('projects');
}, {
	name: 'projects',
	data: function(){
		return {
			projects: Jobs.find().fetch().reverse()
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

Router.route('/projects/:category/', function(){
	this.render('projects');
},
{
	name:'projectsCategory',
	data: function(){
		return {
			projects: Jobs.find({category: this.params.category}).fetch().reverse(),
			pageTitle: 'category:' + this.params.category
		}
	}

});

Router.route('/projects/details/:_id', function(){
	this.render('projectDetails');
},
{
	name: 'projectDetails',
	data: function(){
		var _id = this.params._id;
		return{
			projects: Jobs.findOne(_id)
		}
	}
})


Router.route('/about', function () {
	this.render('cardLayout');
}, {
	name: 'about'
});