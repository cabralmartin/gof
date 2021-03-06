**Game of Life**
================

A *Conway's Game of Life* Javascript implementation
---------------------------------------------------

This is a simple JavaScript implementation of [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life).

This implementation consists of three modules working together in an MVC fashion, 

* **gameManager.js**  
  *In charge of initialising other modules and UI control binding*

* **gameBoard.js**  
  *In charge of keeping the state of the game and applying the game rules.*

* **gameRender.js**  
  *In charge of presenting the state of the game to the user*

Module definition and dependency injection is done using [RequireJS](http://requirejs.org/).

All modules communicate between each other using the [Mediator Object](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript) which allows for a loosely coupled interaction. 

You can find the Unit Tests for this implementation at [/tests](https://github.com/cabralmartin/gof/tree/master/tests). [Jasmine](http://pivotal.github.com/jasmine/) and [RequireJS](http://requirejs.org/) were used for creating the tests.

Code is linted with [jslint](http://www.jslint.com/) (multiple `var` usage and whitespace consistency warnings were ignored).

The application is currently deployed and running at [AppHarbour](https://appharbor.com/).  

**You can find the application @ <http://gof.apphb.com/>**  
**You can run the tests @ <http://gof.apphb.com/tests/>**

Libraries & Frameworks used,

* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) *UI Styling and grid*
* [jQuery](http://jquery.com/) *DOM Manipulation*
* [underscore](http://underscorejs.org/) *Templating*
* [jasmine](http://pivotal.github.com/jasmine/) *Unit Testing*
* [requireJS](http://requirejs.org/) *Module definition and Dependency Injection*
