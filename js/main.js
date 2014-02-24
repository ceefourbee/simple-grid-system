// Test for nth-child(...n) support
Modernizr.testStyles(" #modernizr div:nth-child(3n){width:10px;} ", function(elem, rule){
	var bool = false, divs = elem.getElementsByTagName("div");
	if (divs.length == 7){
		var test = window.getComputedStyle ? function(i){
			return getComputedStyle(divs[i], null)["width"] == "10px";
		} : function(i){
			return divs[i].currentStyle["width"] == "10px";
		};
		bool = !test(0) && !test(1) && test(2) && !test(3) && !test(4) && test(5) && !test(6);
	}
	Modernizr.addTest("nthchildn", bool);
}, 7);

$(document).ready(function() {
  
  // Use the modernizr nth-child plugin to check if the browser supports :nth-child selectors
  if (!Modernizr.nthchildn) {
    
    // If it doesn't, then loop through each ul > li within the grid layout and add class to clear as appropriate
    var gridArray = [['25','4n+1'],['33','3n+1'],['50','2n+1']];
        
    for (var i = 0; i < gridArray.length; i++) {
      
      $('.grid-row--list > .grid-column--' + gridArray[i][0] + ':nth-child(' + gridArray[i][1] + ')').addClass('clear');
      
    }
        
  }
    
});

