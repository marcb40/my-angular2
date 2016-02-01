* npm init
* bower init
* modify ignore list to have app/bower_components",
* npm install -g gulp bower
* create .bowerrc with contents
		{
		  "directory": "app/bower_components"
		}
* npm install gulp bower gulp-rimraf gulp-jshint gulp-uglify gulp-cssnano gulp-connect --save
* bower install angular angular-animate angular-route jquery animate.css bootstrap bootstrap-sass fontawesome --save

* npm install gulp-sass browserify vinyl-source-stream --save-dev
* npm install angular angular-animate angular-route --save (because browserify 'require angular' looks for it in the npm components)


**** git ****
* git init
* add .gitignore with contents
	/node_modules/*
	**/node_modules/*
	**/bower_components/*
	*.sassc
	/public/css/style.css
	/public/js/main.js
* git add .
* git commit -m "initial"

**** git hub ** 
* create new repositoyr
* follow instructions
	- git remote add origin https://github.com/marcb40/my-angular2.git
	- git push -u origin master





		 