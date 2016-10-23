/* app.js */

(function() { 	
	
	var Cat = function(photo, catName) {
		this.clickCount = 0;
		this.imgSrc = photo;
		this.catName = catName;
	
		console.log("Cat initialized! Starting count: " + this.clickCount + " | photo: " + this.imgSrc + 
		" | name: " + this.catName);
 	};
 
	var model = {
		cats: {},
		currentCat: {},
		defaultCats: []
		
	};

	var catDropdownView = {
		init: function() {
			/* select cat dropdown logic */
			$("#ct-cat-selector a").on("click", function(e) {
				e.preventDefault();
				var selectedCat = $(this).text().toLowerCase();
				
				controller.setCurrentCat(model.cats[selectedCat]);
				view.render();
			});
		},
		
		render:  function() {
			
		}
	};
	
	var view = {
		init: function() {
			// dom elements saved into the view object for easy reference.
			this.catElem = document.getElementById("cat");
			this.catNameElem = document.getElementById("cat-name");
			this.catImgElem = document.getElementById("cat-img");
			this.countElem = document.getElementById("cat-count");
			
			// listener for clicking on the cat to increase the click count.
			this.catImgElem.addEventListener("click", function() {
				controller.incrementCounter();
			});
			
			// after the click count increases, render the view.
			view.render();
		},
		
		render: function() {
			// update the DOM elements with the current cat information.
			var currentCat = controller.getCurrentCat();
			
			console.log("New rendering the view with: " + currentCat.imgSrc);
			this.countElem.textContent = currentCat.catName + " has been clicked "+ currentCat.clickCount + " times.";
			this.catNameElem.textContent = currentCat.catName;
			this.catImgElem.src = currentCat.imgSrc;
		}
	};
	
	var controller = {
		createDefaultCats: function(names) {
			// This function creates a number of new cats using my Cat constructor function and an array of names
			// passed to it that were parsed from the HTML of the cat selector menu. Each list menu item
			// becomes a cat.
			
			var imagePath = "";
			var name = "";
			
			for(var i=0; i<names.length; i++) {
				imagePath = names[i] + ".jpg";
				name = names[i];
				
				model.cats[name] = new Cat(imagePath, name);
			}
			
			console.log(model.cats);
		},
		
		parseCatNamesFromMenu: function() {
			/* grab items from the cat selector menu */
			var catNamesMenu = document.querySelectorAll("#ct-cat-selector a");
			
			// initialize the defaultCats list just in case.
			model.defaultCats = [];
			
			/* put the text of these items into an array. This array will be
			   create the names of the 5 cats that comprise cat clicker premium */
			for (var i = 0; i<catNamesMenu.length; i++) {
				model.defaultCats.push(catNamesMenu[i].textContent.toLowerCase());
			}
		},
		
		setCurrentCat: function(cat) {
			model.currentCat = cat;
			console.log("The variable passed into setCurrentCat function is: " + cat);
			console.log("Current cat set to: " + model.currentCat);
		},
		
		getCurrentCat: function() {
			return model.currentCat;	
		},
				
		incrementCounter: function() {
			model.currentCat.clickCount++;
			view.render();	
		},
		
		init: function() {
			controller.parseCatNamesFromMenu();
			controller.createDefaultCats(model.defaultCats);
			controller.setCurrentCat(model.cats[model.defaultCats[0]]);
			
			catDropdownView.init();
			view.init();
		}
		
	};
	
	controller.init();
})();
