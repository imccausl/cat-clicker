/* app.js */

(function() { 	
	var data = {
		cats: {},
		defaultCats: []
		
	};

	var view = {
		init: function() {
			/* select cat dropdown logic */
			$("#ct-cat-selector a").on("click", function(e) {
				e.preventDefault();
				var selectedCat = $(this).text().toLowerCase();
				
				controller.selectCat(selectedCat);
				
				console.log(selectedCat);
			});
		},
		
		render:  function() {
			
		}
	};
	
	var controller = {
		createDefaultCats: function(names) {
			var imagePath = "";
			var name = "";
			
			for(var i=0; i<names.length; i++) {
				imagePath = names[i] + ".jpg";
				name = names[i];
				
				data.cats[name] = new Cat(imagePath, name);
			}
			
			console.log(data.cats);
		},
		
		parseCatNamesFromMenu: function() {
			/* grab items from the cat selector menu */
			var catNamesMenu = document.querySelectorAll("#ct-cat-selector a");
			
			/* put the text of these items into an array. This array will be
			   create the names of the 5 cats that comprise cat clicker premium */
			for (var i = 0; i<catNamesMenu.length; i++) {
				data.defaultCats.push(catNamesMenu[i].textContent.toLowerCase());
			}
			
			console.log(data.defaultCats);
		},
		
		selectCat: function(cat) {
			var numberOfCats = Object.keys(data.cats).length;
			
			for (var key in data.cats) {
				data.cats[key].currentCat = false;
			}
			
			controller.removeCats();
			data.cats[cat].displayCat();
		},
		
		removeCats: function() {
			var catDisplayArea = document.querySelector("[data-view='cat-detail']");
			var countDisplayArea = document.querySelector("[data-view='click-count']");
			
			catDisplayArea.innerHTML = "";
			countDisplayArea.innerHTML = "";
		},
		
		init: function() {
			controller.parseCatNamesFromMenu();
			controller.createDefaultCats(data.defaultCats);
			data.cats[data.defaultCats[0]].displayCat();
		}
		
	};
	
	controller.init();
	view.init();
})();
