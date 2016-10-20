/* 	app.js 
 *	Where the app logic lives 
 *  for the cat clicker app */
 
/* First, define a class. The class, Cat, needs a *clickCount* property to keep track of the number
 * of times it is clicked; It needs a *incrementClickCount* method, to increment the clickCount on click; It  
 * needs some way to keep track of the photo that will be displayed when the object is instantiated: a photo 
 * property containing the path to the photo to be displayed, perhaps? This path can be fed to it from the 
 * listbox containing the cats, from which the user selects the cat to display and click. All the "cat logic" 
 * needs to be built into this class, so we also need a way to listen for the click event, and then invoke 
 * the incrementClickCount method. 
 
 	A rundown of the class needs:
 	properties: clickCount, photo, catName
 	methods: displayCat, incrementClickCount
 
 */
 
 /* begin by defining the class */
 var Cat = function(clickCountStart, photo, catName) {
	 this.clickCount = clickCountStart;
	 this.photo = photo;
	 this.catName = catName;
	 
	 console.log("Cat initialized! Starting count: " + this.clickCount + " | photo: " + this.photo + 
	 " | name: " + this.catName);
 };


Cat.prototype.incrementClickCount = function() {
	 this.clickCount++;
	 console.log("Cat clicked " + this.clickCount + " times!");
};
	 
/* add the displayCat method to the prototype */
Cat.prototype.displayCat = function () {
	var displayArea = document.getElementById("cat-display");
	var displayCatHTML = "<img id='click-" + this.catName + "' src='" + this.photo + "' width='50%' />";
	var catClickListenerArea = "";
	
	/* display cat */
	displayArea.innerHTML = displayCatHTML;
	
	/* add event listener */
	catClickListenerArea = document.getElementById("click-" + this.catName);
	catClickListenerArea.addEventListener("click", this.incrementClickCount.bind(this));
};