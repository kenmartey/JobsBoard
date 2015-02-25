<head>
<title>JobsBoard</title>
</head>

<body>
{{> navigationbar}}
{{> intro}}
{{> form}}
{{#afModal class="btn btn-primary" collection="Jobs" operation="insert"}}
Add a new post
{{/afModal}}
{{> showinformation}}
</body>


<template name="navigationbar">
<nav class="navbar navbar-default">
<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" href="#">Meltwater: JobsBoard</a>
</div>

<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav">
<li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>
<li><a href="#">About</a></li>
</ul>
<form class="navbar-form navbar-left" role="search">
<div class="form-group">
<input type="text" class="form-control" placeholder="Search">
</div>
<button type="submit" class="btn btn-default">Submit</button>
</form>
<ul class="nav navbar-nav navbar-right">
<li><a href="#">Projects</a></li>
<li><a href="#">Projects</a></li>
{{> loginButtons}}
</ul>
</div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->
</nav>
</template>

<template name="intro">
<h3>This is the introduction</h3>
</template>

<template name="form">
{{> autoformModals collection="Jobs" id="insertJobForm" type="insert"}}
</template>

<template name="showinformation">
<div class="container">
<h3>Mest Projects</h3>
<div class="row">
<div class="col-md-6">
<div class="panel panel-primary">
<div class="panel-heading">
<h3 class="panel-title">Available Jobs at Mest</h3>
<div class="pull-right">
<span class="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
<i class="glyphicon glyphicon-filter"></i>
</span>
</div>
</div>
<div class="panel-body">
<input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
</div>
<table class="table table-hover" id="dev-table">
<thead>
<tr>

<th>Job Title</th>
<th>Job Description</th>
<th>Contact Information</th>
</tr>
</thead>

<tbody>
{{#each showinformation}}
<tr>

<td>{{jobtitle}}</td>
<td>{{jobsdescription}}</td>
<td>{{contactinformation}} </td>
<td>{{#afModal class="btn btn-primary" collection="Jobs" operation="update" doc=_id}}
Update post
{{/afModal}}</td>
</tr>
{{/each}}
</tbody>
</table>
</div>
</div>

</div>
</div>
</template>


{{#if currentUser}}
<td>{{#afModal class="btn btn-primary" collection="Jobs" operation="update" doc=_id}}
Update post
{{/afModal}}
</td>
{{else}}
<td>
{{#afModal class="btn btn-primary" collection="Applications" operation="insert"}}
Apply
{{/afModal}}
{{> autoformModals collection="Applications" id="insertApplicationsForm" type="insert"}}
</td>
{{/if}}


<template name="jobs">
{{#if currentUser}}
{{#afModal class="btn btn-primary" collection="Jobs" operation="insert"}}
Add a new Job
{{/afModal}}
{{> autoformModals collection="Jobs" id="insertJobForm" type="insert"}}
{{/if}}

//Another way of showing data in projects instead of registerhelpers
data: function(){
return {
projects: Projects.find().fetch(),
pageTitle: 'this is my page'
}
}




cards layout
.vm>li {
list-style-type: none;
width: 230px;
background: rgba(255, 255, 255, 1);
border-radius: 5px;
transition: all 0.5s;
top: 100%;
left: 387px;
}

fields for application form
FullName
Date of Birth
Nationality
Upload cv
Upload Picture 
why you want the job
qualification
contact information 
email

























<a href="{{pathFor 'projectsCategory' category='html'}}" class="btn btn-primary">HTML</a>

<a href="{{pathFor 'projectsCategory' category='javaScript'}}" class="btn btn-success">JavaScript</a>

<a href="{{pathFor 'projectsCategory' category='driver'}}" class="btn btn-info">Driver</a>

<div class="row">
<div class="col-md-6">
<div class="panel panel-primary">
<div class="panel-heading">
<h3 class="panel-title">Available Jobs at Mest</h3>
<div class="pull-right">
<span class="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
<i class="glyphicon glyphicon-filter"></i>
</span>
</div>
</div>
<div class="panel-body">
<input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
</div>
<table class="table table-hover" id="dev-table">
<thead>
<tr>

<th>Job Title</th>
<th>Job Description</th>
<th>Contact Information</th>
<th>Job Category</th>
</tr>
</thead>

<tbody>
{{#each projects}}
<tr>

<td>{{title}}</td>
<td>{{description}}</td>
<td>{{contactInformation}} </td>
<td>{{category}} </td>
<td>
{{#if currentUser}}
{{#afModal class="btn btn-primary" collection="Jobs" operation="update" doc=_id}}
Update post
{{/afModal}}

{{#afModal class="btn btn-danger" collection="Jobs" operation="remove" doc=_id}}
Delete post
{{/afModal}}
{{/if}}
<a href="{{pathFor 'projectDetails' _id=_id}}" class="btn btn-info">Readmore</a>
</td>
<!-- <td> -->
<!-- </td> -->
</tr>
{{/each}}
</tbody>
</table>
</div>
</div>

</div>
</div>









==================using card layout in projects.html=========================\

<template name="projects">

<div class="container">
{{# if currentUser}}
{{#afModal class="btn btn-primary" collection="Jobs" operation="insert"}}
Add a new Job
{{/afModal}}
{{> autoformModals collection="Jobs" id="insertJobForm" type="insert"}}
{{/if}}
</div> 
<div class="container">
<h3>Mest Projects</h3>
</div>

<section>
<article class="right-l">
<div class="card">
<div class="title">
<p id="card-title" align="left"><strong>{{title}}</strong></p>
</div>
<div class="demo-live">
{{description}}
{{contactInformation}} 
{{category}}
</div>
<div class="demo-source-head">
<span class="pointer-up"></span>

{{#if currentUser}}
{{#afModal class="btn btn-primary" collection="Jobs" operation="update" doc=_id}}
Update post
{{/afModal}}

{{#afModal class="btn btn-danger" collection="Jobs" operation="remove" doc=_id}}
Delete post
{{/afModal}}
{{/if}}
</div>
</div><br>
</article>
</section>
</template>

// =============================== application collection=========================== //

job: {
type: String,
autoform: {
omit: true
}
}


