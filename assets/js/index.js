//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SALADS" },' +
		'{ "type":"food", "name":"Garden Fresh Green Salad", "description":"Green Veggies Cut and Served Fresh", "price":"149", "food":"veg" },' +
		'{ "type":"food", "name":"Russian Salad", "description":"Salads Made From Boiled Vegetables, Pineapple And Eggless Mayonnaise", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Pasta Salad With Sundried Tomatoes", "description":"Macaroni Pasta, Fresh Mozzarella, Basil, and Sun-Dried Tomatoes", "price":"149", "food":"veg" },' +
		'{ "type":"food", "name":"Oriental Salad", "description":"Salads Made From Boiled Salads Full Of Cabbage, Carrots, Noodles, Green Onions, Tossed With OrientalÊDressing", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Paneer Tikka Chat", "description":"Spicy, Tangy,Chat Made With Paneer Tikka, Onion And Bell Pepper", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Cucumber Salad", "description":"Chopped Onions, Tomatoes, Cucumbers and A Salt, Pepper, Chilli, Lemon Dressing", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Chicken Tikka Chat", "description":"Spicy, Tangy,Chat Tossed With Chicken Tikka, Onion, BellPepperAndIndianSpices", "price":"199", "food":"nonveg" },' +
		'{ "type":"separator", "description":"STREET FOOD" },' +
		'{ "type":"food", "name":"Masala Peanuts", "description":"", "price":"149", "food":"veg" },' +
		'{ "type":"food", "name":"Fried Masala Kajunuts", "description":"", "price":"229","food":"veg"  },' +
		'{ "type":"food", "name":"Aloo & Chana Chat ", "description":"", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Hatpata Masala Papad", "description":"", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Roasted Papad", "description":"", "price":"99", "food":"veg" },' +
		'{ "type":"food", "name":"Plain Curd", "description":"", "price":"99","food":"veg"  },' +
		'{ "type":"food", "name":"Choice Of Raita", "description":"Plain / Mixed Vegetable / Pineapple", "price":"149", "food":"veg" },' +

		'{ "type":"separator", "description":"SOUPS / ZUPPA " },' +

		'{ "type":"food", "name":"Roasted Creamy Tomato Soup", "description":"Juicy Roma tomatoes oven roasted, pureed and thickened with flour, butter and cream", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Cream Of Chicken & Thyme Soup", "description":"A velvety broth rich in chicken & cream, flavoured with aromatic thyme", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Caramelized Onion Soup With Chicken", "description":"Flavorful sweet & savory French soup served with cheese & croutons", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Caramelized Onion Soup With Veggies", "description":"Flavorful sweet & savory French soup served with cheese & croutons", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Cream De La Cream Veggies", "description":"Mélange of veggies creamed with butter & flour, flavored with French spices", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Sweet Corn Soup [Chicken]", "description":"Flavored corn kernels Soup; made with oriental spices, chicken flavorful broth & potato butter starch", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Sweet Corn Soup [Veggies]", "description":"Flavored corn kernels Soup; made with oriental spices, vegetable flavorful broth & potato butter starch", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Manchow Soup [Chicken]", "description":"A popular Indo Chinese soup made with chicken, ground pepper, and pantry spices served with crispy fried noodles", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Manchow Soup [Veg]", "description":"A popular Indo Chinese soup made with vegetables, ground pepper, and pantry spices served with crispy fried noodles", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Lemon Coriander Soup [Chicken]", "description":"A refreshing soup made with mélange of veggies, chicken, lemon juice & coriander paste of South Asian origin", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Lemon Coriander Soup [Veg]", "description":"A refreshing soup made with mélange of veggies, lemon juice & coriander paste of South Asian origin", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Hot & Sour Soup [Chicken]", "description":"A specialty of The Grand made with sweet chili pepper, fresh lemon juice, and chicken", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Hot & Sour Soup [Veg]", "description":"A specialty of The Grand made with sweet chili pepper, fresh lemon juice, and vegetables", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Jade Soup [Chicken]", "description":"A green soup of Ming dynasty era made with Chinese spices, chicken, mushroom & corn, flavored with oriental spices", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Jade Soup [Veg]", "description":"A green soup of Ming dynasty era made with Chinese spices, mushroom & corn, flavored with oriental spices", "price":"199" ,"food":"veg"}' +

	']'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"PIZZA" },' +
		'{ "type":"food", "name":"MARGHERITA", "description":"Tomato sauce, mozzarella, organic oregano", "price":"18.00" },' +
		'{ "type":"food", "name":"PROSCIUTTO", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"21.50" },' +
		'{ "type":"food", "name":"SALAME", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"21.00" },' +
		'{ "type":"food", "name":"TONNO", "description":"Tomato sauce, mozzarella, tuna MSC, capers, organic oregano", "price":"19.50" },' +
		'{ "type":"separator", "description":"MEAT & FISH" },' +
		'{ "type":"food", "name":"SURF & TURF", "description":"Beef entrecôte with herb butter, vegetables and  fries", "price":"48.00" },' +
		'{ "type":"food", "name":"RUMP STEAK", "description":"with café de paris herbs butter, fries and vegetables", "price":"35.00" },' +
		'{ "type":"food", "name":"FISH & CHIPS", "description":"Cod in beer batter with french fries and mashed peas", "price":"25.00" },' +
		'{ "type":"separator", "description":"PASTA" },' +
		'{ "type":"food", "name":"LINGUINE", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"25.00" },' +
		'{ "type":"food", "name":"RAVIOLI", "description":"filled with truffle-ricotta and hazelnuts butter", "price":"28.50" } ]'
);
const desserts = JSON.parse(
	"[" + 
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"CHOCOLATE MOUSSE", "description":"with star anise, a pecan brownie and salty caramel sauce", "price":"12.00" },' +
		'{ "type":"food", "name":"TIRAMISU", "description":"rolled rhubarb pistachio with vanilla strawberry amaretto sauce", "price":"13.50" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"exotic fruits with tapioca pearls mango sorbet and homemade coconut liqueur", "price":"10.50" } ]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"WATER & SODA" },' +
		'{ "type":"drink", "name":"SPARKLING WATER", "description":"5dl", "price":"4.50" },' +
		'{ "type":"drink", "name":"STILL WATER", "description":"5dl", "price":"4.50" },' +
		'{ "type":"drink", "name":"SODA", "description":"3dl", "price":"5.50" },' +
		'{ "type":"drink", "name":"TAP WATER", "description":"", "price":"FREE" },' +
		'{ "type":"separator", "description":"BEER" },' +
		'{ "type":"drink", "name":"BADENER GOLD", "description":"3dl", "price":"4.80" },' +
		'{ "type":"drink", "name":"BADENER GOLD", "description":"5dl", "price":"7.00" },' +
		'{ "type":"drink", "name":"QUÖLLFRISCH", "description":"5dl", "price":"7.50" },' +
		'{ "type":"drink", "name":"BIER PAUL 02", "description":"3.3dl", "price":"6.00" },' +
		'{ "type":"separator", "description":"RED WINE" },' +
		'{ "type":"drink", "name":"MERLOT DEL TICINO", "description":"1dl", "price":"7.00" },' +
		'{ "type":"drink", "name":"BOLGHERI ROSSO", "description":"1dl", "price":"8.50" },' +
		'{ "type":"drink", "name":"NERO D’AVOLA IGT", "description":"1dl", "price":"7.50" },' +
		'{ "type":"drink", "name":"MONTE CASTANHEIRO", "description":"1dl", "price":"8.00" },' +
		'{ "type":"separator", "description":"WHITE WINE & CHAMPAGNE" },' +
		'{ "type":"drink", "name":"ST. SAPHORIN7", "description":"1dl", "price":"7.00" },' +
		'{ "type":"drink", "name":"BASILICATA BIANCO", "description":"1dl", "price":"7.50" },' +
		'{ "type":"drink", "name":"TAITTINGER BRUT", "description":"7.5dl", "price":"91.00" },' +
		'{ "type":"separator", "description":"WHISKY" },' +
		'{ "type":"drink", "name":"OBAN 14 YEARS", "description":"4cl", "price":"13.50" },' +
		'{ "type":"drink", "name":"LAGAVULIN 16 YEARS", "description":"4cl", "price":"15.00" },' +
		'{ "type":"drink", "name":"MACALLEN AMBER", "description":"4cl", "price":"16.00" },' +
		'{ "type":"separator", "description":"HOT DRINKS" },' +
		'{ "type":"drink", "name":"ESPRESSO", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"CAFE LATTE", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"5.00" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			 // Create veg/non-veg icon
			 let icon = document.createElement("span");
			 if (items[i].food === "veg") {
				 icon.setAttribute("class", "veg-icon");
			 } else if (items[i].food === "nonveg") {
				 icon.setAttribute("class", "non-veg-icon");
			 }
 
			 menuitemname.appendChild(icon);

			 menuitemname.appendChild(document.createTextNode(items[i].name));
 
			 menuitemdesc.innerHTML = items[i].description;
 
			 menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

function changeBackgroundImage(imageUrl) {
    let menu = document.querySelector(".container");
    menu.style.backgroundImage = `url(${imageUrl})`;
}

window.addEventListener("resize", (e) => {
    setIndicator(sl);
});

// Add event listeners to buttons
document.getElementById("startersbutton").addEventListener("click", function() {
    populateItems(starters);
    changeBackgroundImage('assets/image/starter.png'); // Replace with your image path
});

document.getElementById("mainsbutton").addEventListener("click", function() {
    populateItems(mains);
    changeBackgroundImage('assets/image/food.png'); // Replace with your image path
});

document.getElementById("dessertsbutton").addEventListener("click", function() {
    populateItems(desserts);
    changeBackgroundImage('assets/image/desert.png'); // Replace with your image path
});

document.getElementById("drinksbutton").addEventListener("click", function() {
    populateItems(drinks);
    changeBackgroundImage('assets/image/drinks.png'); // Replace with your image path
});


//default runs
setIndicator(sl);
populateItems(starters);
changeBackgroundImage('assets/image/starter.png'); // Replace with your image path
