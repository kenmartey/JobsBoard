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
	name: 'projects'
});

Router.route('/about', function () {
	this.render('about');
}, {
	name: 'about'
});