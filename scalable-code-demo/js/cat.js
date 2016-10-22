/* 	app.js 
 *	Where the cat logic lives 
 *  for the cat clicker app */
 
/* First, define a class. The class, Cat, needs a *clickCount* property to keep track of the number
 * of times it is clicked; It needs a *incrementClickCount* method, to increment the clickCount on click; It  
 * needs some way to keep track of the photo that will be displayed when the object is instantiated: a photo 
 * property containing the path to the photo to be displayed, perhaps? This path can be fed to it from the 
 * listbox containing the cats, from which the user selects the cat to display and click. All the "cat logic" 
 * needs to be built into this class, so we also need a way to listen for the click event, and then invoke 
 * the incrementClickCount method. 
 
 	A rundown of the class needs:
 	properties: clickCount, photo, catName, currentCat[boolean]
 	methods: displayCat, incrementClickCount
 
 */
 
 /* begin by defining the class/constructor */
 var Cat = function(photo, catName) {
	 this.clickCount = 0;
	 this.photo = photo;
	 this.catName = catName;
	 this.currentCat = false;
	 
	 console.log("Cat initialized! Starting count: " + this.clickCount + " | photo: " + this.photo + 
	 " | name: " + this.catName);
 };


Cat.prototype.incrementClickCount = function() {
	 this.clickCount++;
	 this.updateCount();
};
	 
/* add the displayCat method to the prototype */
Cat.prototype.displayCat = function() {
	var displayArea = document.querySelector("[data-view='cat-detail']");
	var displayCatHTML = "<img id='click-" + this.catName + "' src='" + this.photo + "' width='50%' />";
	
	
	var catClickListenerArea = "";
	
	/* display cat */
	displayArea.innerHTML = displayCatHTML;
	this.updateCount();
	
	/* add event listener */
	catClickListenerArea = document.getElementById("click-" + this.catName);
	catClickListenerArea.addEventListener("click", this.incrementClickCount.bind(this));
	this.currentCat = true;
};

Cat.prototype.updateCount = function() {
	var displayClickCount = document.querySelector("[data-view='click-count']");
	var displayClickCountHTML = "<p>Cat Clicked " + this.clickCount + " Times!</p>";
	
	console.log("Cat clicked " + this.clickCount + " times!");
	displayClickCount.innerHTML = displayClickCountHTML;
}