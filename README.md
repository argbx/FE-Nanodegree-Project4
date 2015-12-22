## Website Performance Optimization portfolio project

####Part 1: 

* Run python -m SimpleHTTPServer 8080 and ngrok to test the page on google pagespeed.

Page Scored over 90 for both Mobile and Desktop Versions

### Part 2:

* Added use strict on all the functions
* Changed all the querySelector calls to getElementById() Web API call for faster load
* Updated changePizzaSizes to put the .length in a variable for effciency
* Updated changePizzaSizes, removed dx and newwidth outside the loop
* Moved   var pizzasDiv = document.getElementById("randomPizzas"); to outside the for loop
* Update postions, created itemslength variable, and moved phase variable outside the loop
* Used screen size to calculate total number of pizzas
* Declared elem outside the addeventListener loop
* Moved dx and newwidth out of the loop assisning them the value of item 0 since they are fixed levent-20151222
* using getElementsbyClassname instead of queryselector all levent-20151222