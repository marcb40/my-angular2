This is a bare-bones project with instructions of how to create an AngularJS app from scratch. 

There is a gulp watch task that compiles the js and css whenever they are touched.  AngularJS and bootstrap are included in your js/css respectively so the index.html file only needs to point to one js and one css.

<h2> To run this app </h2>
* git clone  "https://github.com/marcb40/my-angular2.git" "C:\workspace\my-angular2"
* cd to this dir
* npm install
* bower install
* gulp
* navigate to http://localhost:8888


<h2>Here are instructions on how this project was created from scratch</h2>


<h4>Setup</h4>
* npm init
* bower init
* modify ignore list to have app/bower_components",
* npm install -g gulp bower
* create .bowerrc with contents
		{
		  "directory": "app/bower_components"
		}
* npm install gulp bower gulp-connect angular angular-animate angular-route --save
* npm install gulp-sass browserify vinyl-source-stream --save-dev
* bower install jquery animate.css bootstrap bootstrap-sass fontawesome --save

<h4>create app</h4>
* create style.scss in /app/sass
* create main.js in /app/js
* create index.html in /public with content
```
	<!DOCTYPE html>
	<html ng-app="SampleApp">
	  <head lang="en">
	    <title>Angular-Gulp-Browserify-Starter</title>
	    <link rel="stylesheet" href="css/style.css"/>
	  </head>
	  <body>
	    <div class="container">
	      <h1>Angular-Gulp-Browserify-Starter</h1>
	       <div >{{1 + 3}}</div>
	      <div ng-view></div>
	    </div>
	    <script src="js/main.js"></script>
	  </body>
	</html>
```
* create gulpfile.js in /
* gulp


<h4>git</h4>
* git init
* add .gitignore with contents
```
	/node_modules/*
	**/node_modules/*
	**/bower_components/*
	*.sassc
	/public/css/style.css
	/public/js/main.js
```
* git add .
* git commit -m "initial"

<h4>git hub</h4>
* create new repository
* follow instructions
	- git remote add origin https://github.com/marcb40/my-angular2.git
	- git push -u origin master





		 
