//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SALADS" },' +
		'{ "type":"food", "name":"Garden Fresh Green Salad", "description":"Green Veggies Cut and Served Fresh", "price":"149", "food":"veg"},' +
		'{ "type":"food", "name":"Russian Salad", "description":"Salads Made From Boiled Vegetables, Pineapple And Eggless Mayonnaise", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Pasta Salad With Sundried Tomatoes", "description":"Macaroni Pasta, Fresh Mozzarella, Basil, and Sun-Dried Tomatoes", "price":"149", "food":"veg" },' +
		'{ "type":"food", "name":"Oriental Salad", "description":"Salads Made From Boiled Salads Full Of Cabbage, Carrots, Noodles, Green Onions, Tossed With OrientalÊDressing", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Paneer Tikka Chat", "description":"Spicy, Tangy,Chat Made With Paneer Tikka, Onion And Bell Pepper", "price":"199", "food":"veg" , "spicy":"mild"},' +
		'{ "type":"food", "name":"Cucumber Salad", "description":"Chopped Onions, Tomatoes, Cucumbers and A Salt, Pepper, Chilli, Lemon Dressing", "price":"149","food":"veg"  },' +
		'{ "type":"food", "name":"Chicken Tikka Chat", "description":"Spicy, Tangy,Chat Tossed With Chicken Tikka, Onion, BellPepperAndIndianSpices", "price":"199", "food":"nonveg" , "spicy":"mild"},' +
		
		'{ "type":"separator", "description":"STREET FOOD" },' +
		'{ "type":"food", "name":"Masala Peanuts", "description":"", "price":"149", "food":"veg", "spicy":"mild" },' +
		'{ "type":"food", "name":"Fried Masala Kajunuts", "description":"", "price":"229","food":"veg"  },' +
		'{ "type":"food", "name":"Aloo & Chana Chat ", "description":"", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Hatpata Masala Papad", "description":"", "price":"149","food":"veg", "spicy":"hot"  },' +
		'{ "type":"food", "name":"Roasted Papad", "description":"", "price":"99", "food":"veg" },' +
		'{ "type":"food", "name":"Plain Curd", "description":"", "price":"99","food":"veg"  },' +
		'{ "type":"food", "name":"Choice Of Raita", "description":"Plain / Mixed Vegetable / Pineapple", "price":"149", "food":"veg" },' +

		'{ "type":"separator", "description":"SOUPS / ZUPPA " },' +

		'{ "type":"food", "name":"Roasted Creamy Tomato Soup", "description":"Juicy Roma tomatoes oven roasted, pureed and thickened with flour, butter and cream", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Cream Of Chicken & Thyme Soup", "description":"A velvety broth rich in chicken & cream, flavoured with aromatic thyme", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Caramelized Onion Soup With Chicken", "description":"Flavorful sweet & savory French soup served with cheese & croutons", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Caramelized Onion Soup With Veggies", "description":"Flavorful sweet & savory French soup served with cheese & croutons", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Cream De La Cream Veggies", "description":"Mélange of veggies creamed with butter & flour, flavored with French spices", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Sweet Corn Soup [Chicken]", "spicy":"mild", "description":"Flavored corn kernels Soup; made with oriental spices, chicken flavorful broth & potato butter starch", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Sweet Corn Soup [Veggies]", "description":"Flavored corn kernels Soup; made with oriental spices, vegetable flavorful broth & potato butter starch", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Manchow Soup [Chicken]", "spicy":"mild", "description":"A popular Indo Chinese soup made with chicken, ground pepper, and pantry spices served with crispy fried noodles", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Manchow Soup [Veg]", "spicy":"mild", "description":"A popular Indo Chinese soup made with vegetables, ground pepper, and pantry spices served with crispy fried noodles", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Lemon Coriander Soup [Chicken]", "description":"A refreshing soup made with mélange of veggies, chicken, lemon juice & coriander paste of South Asian origin", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Lemon Coriander Soup [Veg]", "description":"A refreshing soup made with mélange of veggies, lemon juice & coriander paste of South Asian origin", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Hot & Sour Soup [Chicken]", "spicy":"hot", "description":"A specialty of The Grand made with sweet chili pepper, fresh lemon juice, and chicken", "price":"299" , "food":"nonveg"},' +
		'{ "type":"food", "name":"Hot & Sour Soup [Veg]", "spicy":"hot", "description":"A specialty of The Grand made with sweet chili pepper, fresh lemon juice, and vegetables", "price":"199", "food":"veg" },' +
		'{ "type":"food", "name":"Jade Soup [Chicken]", "description":"A green soup of Ming dynasty era made with Chinese spices, chicken, mushroom & corn, flavored with oriental spices", "price":"299", "food":"nonveg" },' +
		'{ "type":"food", "name":"Jade Soup [Veg]", "description":"A green soup of Ming dynasty era made with Chinese spices, mushroom & corn, flavored with oriental spices", "price":"199" ,"food":"veg"},' +

		'{ "type":"separator", "description":"APPETISER VEGETERIAN CLAYPOT" },' +

		'{ "type":"food", "name":"Traditional Paneer Tikka", "description":"A North Indian delight featuring marinated paneer cheese and veggies grilled in a tandoor. Seasoned with lemon juice and chat masala, it’s a flavorful vegetarian treat", "price":"329","food":"veg","spicy":"mild" },' +
		'{ "type":"food", "name":"Haryali Paneer Tikka", "description":"A delightful Indian appetizer featuring cubes of soft paneer, marinated in green Indian herbs paste with crisp bell peppers and onions", "price":"329","food":"veg" },' +
		'{ "type":"food", "name":"Yellow Chilli Paneer Tikka", "description":"Delightful Indian appetizer known for its smoky flavor and aromatic spices. It combines paneer with vibrant veggies, marinated and char grilled in tandoor", "price":"329" ,"food":"veg", "spicy":"hot"},' +
		'{ "type":"food", "name":"Cheese & Malai Paneer Tikka", "description":"A creamy and mild Indian starter made with soft paneer cubes, marinated in hung curd, cream, spices, and herbs. Grilled to perfection and served with lemon", "price":"349","food":"veg" },' +
		'{ "type":"food", "name":"Pesto Paneer Tikka", "description":"Soft paneer cubes marinated in a thick yogurt-based marinade with basil pesto, grilled to perfection. Served with mint chutney", "price":"329","food":"veg" },' +
		'{ "type":"food", "name":"HARA BHARA TIKKA", "description":"A healthy and flavorful Indian appetizer made with spinach, potatoes, peas, and spices. Super addictive!", "price":"249" ,"food":"veg"},' +
		'{ "type":"food", "name":"Makai Mirchi Tikka", "description":"A delightful snack made with corn, green chili, and spices. Shallow-fried to perfection!", "price":"249","food":"veg", "spicy":"mild"},' +
		'{ "type":"food", "name":"Rajma Galouti Kabab", "description":"Rajma Galouti Kebab is a melt-in-the-mouth vegetarian version of the traditional Galouti kebab. Packed with flavor, perfect as snacks", "price":"249" ,"food":"veg" },' +
		'{ "type":"food", "name":"Karare Sabzi Seekh Kabab", "description":"A tandoor-grilled appetizer made with mixed vegetables, gram flour, and aromatic spices. Served with mint chutney", "price":"299" ,"food":"veg"},' +
		'{ "type":"food", "name":"Bharbani Aloo", "description":"A flavorful Indian appetizer where barrel-shaped potatoes are filled with spiced cottage cheese, marinated in yogurt masala, and cooked in the tandoor", "price":"299","food":"veg" },' +
		'{ "type":"food", "name":"Tandoori Sabzi Sa shlik", "description":"A fusion dish featuring sweet pineapple and piquant capsicum, grilled to perfection. A delightful appetizer!", "price":"329" ,"food":"veg"},' +
		'{ "type":"food", "name":"Tandoori Pineapple Bhut Jolokia", "description":"Sweet pineapple grilled with the worlds spiciest Bhut Jolokia pepper. A fiery fusion of flavors!", "price":"329" ,"food":"veg", "spicy":"hot"},'+

		'{ "type":"separator", "description":"NON VEG CLAY POT " },' +
		'{ "type":"food", "food":"nonveg", "name":"Ajwaini Tikka Machhi", "description":"Tender, boneless fish pieces marinated with spicy ajwain flavor, grilled to perfection. Served hot with green chutney", "price":"399", "spicy":"mild" },' +
		'{ "type":"food", "food":"nonveg", "name":"Machhi Mulayami Cheese Tikka", "description":"Boneless fish cubes marinated with garlic, ginger, cheese, green chilies, and spices, grilled to perfection", "price":"399" },' +
		'{ "type":"food", "food":"nonveg", "name":"Traditional Machhi Lal Mirchi Tikka", "description":"Fish marinated in hung curd, spices, and red chilies, tandoor roasted. Garnished with coriander and lemon wedges", "price":"399", "spicy":"hot" },' +
		'{ "type":"food", "food":"nonveg", "name":"Yellow Chilli Tangdi Kabab", "description":"Chicken drumsticks marinated in spices, yellow chili powder, curd, and cream. Grilled to perfection, mildly spiced and flavorful", "price":"399", "spicy":"hot" },' +
		'{ "type":"food", "food":"nonveg", "name":"Tandoori Murgh Full", "description":"Tandoori chicken made from chicken marinated in yogurt and spices, then roasted in a cylindrical clay oven", "price":"599" },' +
		'{ "type":"food", "food":"nonveg", "name":"Tandoori Murgh Half", "description":"Tandoori chicken made from chicken marinated in yogurt and spices, then roasted in a cylindrical clay oven", "price":"429" },' +
		'{ "type":"food", "food":"nonveg", "name":"Nizami Tandoori Pomfret", "description":"Traditional Indian dish prepared with Pomfret, marinated in lemon juice, ginger-garlic paste, salt, red chili paste, garam masala, yogurt, and turmeric. Cooked in a tandoor oven and served with green chutneys, lemon wedges, and onion slices", "price":"529" },' +
		'{ "type":"food", "food":"nonveg", "name":"Angaar Ka Jhinga", "description":"Tandoori prawns succulent shrimp marinated in yogurt and aromatic spices, grilled to perfection", "price":"529" },' +
		'{ "type":"food", "food":"nonveg", "name":"Mutton Seekh Kabab", "description":"Ground or minced mutton flavored with aromatic spices, skewered, and pan-roasted until melt-in-the-mouth perfection", "price":"529" },' +
		'{ "type":"food", "food":"nonveg", "name":"Traditional Chicken Tikka", "description":"Small boneless chicken pieces marinated in yogurt and spices, then grilled to perfection", "price":"399", "spicy":"mild" },' +
		'{ "type":"food", "food":"nonveg", "name":"Haryali Chicken Tikka", "description":"Classic North Indian starter where chicken is flavored with fresh green herbs—mint and coriander leaves—along with spices, resulting in a delicious appetizer", "price":"399" },' +
		'{ "type":"food", "food":"nonveg", "name":"Murgh Malai & Cheese Tikka", "description":"Tender chicken kebab marinated in a creamy mixture of yogurt, cheese, and spices, then grilled to perfection", "price":"399" },'+

		'{ "type":"separator", "description":"ORIENTAL VEG " },' +
		'{ "type":"food","food":"veg", "name":"Salt & Pepper Veggies", "description":"Indo-Chinese dish made with assorted veggies coated in a creamy batter and fried crisp", "price":"269", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Salt & Pepper American Corn Nibbles", "description":"Marinated boiled corn niblets in corn starch, fried until crisp, tossed with garlic, ginger, green chili, onions, and colorful capsicums", "price":"269", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Salt & Pepper Mushroom", "description":"Mushrooms fried to crispy perfection, seasoned with simple ingredients, and just the right amount of heat", "price":"299", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Veggie Dumplings Manchurian", "description":"Delicious dish made with wisps of vegetables formed into dumplings and dunked into a sauce with a gorgeous interplay of hot, sweet, sour, and salty flavors", "price":"269" },' +
		'{ "type":"food","food":"veg", "name":"Crispy Potatoes In Chilly Sesame Sauce", "description":"Popular Indo-Chinese starter made with crisp-fried potatoes, tossed in a slightly spicy, sweet, and sour chili sauce", "price":"269", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Chilli Sauce Coated Crunchy Baby Corn", "description":"Popular Indo-Chinese starter made by deep-frying baby corn until golden brown and tossing it in a spicy and tangy onion-capsicum stir-fry sauce", "price":"269", "spicy":"hot" },' +
		'{ "type":"food","food":"veg", "name":"Cottage Cheese In Choice of Sauce", "description":"Choice of sauces: CHILLI / HOT GARLIC / SCHEZWAN / MANCHURIAN", "price":"349", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Veggies Crunchy Lollipops", "description":"Crispy fried lollipops made with a mix of vegetables like potatoes, cabbage, carrots, capsicum, and onions. Seasoned with Indian spices and served as a delightful vegetarian snack", "price":"269", "spicy":"mild" },' +
		'{ "type":"food","food":"veg", "name":"Potato 65", "description":"Crispy and spicy potato snack where parboiled, cubed potatoes are doused in a spicy batter and fried until golden. Tossed with green chili and curry leaves", "price":"269", "spicy":"hot" },' +
		'{ "type":"food","food":"veg", "name":"Paneer 65", "description":"Crispy and spicy cottage cheese snack where cubed paneer is doused in a spicy batter and fried until golden. Tossed with green chili and curry leaves", "price":"349", "spicy":"hot" },' +
		'{ "type":"food","food":"veg", "name":"Cheese & Corn Spring Roll With Sweet Chilly Dip", "description":"Delicious spring roll crispy on the outside, with a spiced veggie and cheesy filling inside", "price":"349" },' +
		'{ "type":"food","food":"veg", "name":"Oriental Spring Roll With Thai Veggies Served With Hot Garlic Sauce", "description":"Oriental spring rolls with a variety of vegetables wrapped in thin pastry and deep-fried", "price":"349" },'+

		'{ "type":"separator", "description":"ORIENTAL NON VEG" },' +
		'{ "type":"food","food":"nonveg", "name":"Korean Crispy Chicken Wings", "description":"Korean Chicken Wings hit all flavor notes: sweet, spicy, tangy, and savory. Coated in a gochujang-based sauce", "price":"399" },' +
		'{ "type":"food","food":"nonveg", "name":"Dragon Chicken Wings", "description":"Fiery and intensely flavorful chicken wings. Marinated in a spicy blend, deep-fried, and tossed with hot sauce", "price":"399", "spicy":"mild" },' +
		'{ "type":"food","food":"nonveg", "name":"Onaki Red Chilli Chicken Dry", "description":"Indo-Chinese dish made with marinated chicken, soy sauce, and slow-cooked onions. Flavorful and moderately spicy", "price":"399", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Kung Pao Chicken", "description":"Spicy stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables, and chili peppers", "price":"399" },' +
		'{ "type":"food","food":"nonveg", "name":"Dragon Chicken", "description":"Spicy, addictive Indo-Chinese appetizer made with crispy fried chicken strips, sautéed onions, capsicum, and cashews, all coated in a flavorful red chili sauce", "price":"399", "spicy":"mild" },' +
		'{ "type":"food","food":"nonveg", "name":"Crispy Calamari", "description":"Crispy fried calamari, a Greek meze made by lightly coating thick calamari slices in seasoned flour and frying until golden brown", "price":"429" },' +
		'{ "type":"food","food":"nonveg", "name":"Chicken Drum Stick", "description":"Oriental Chicken Drumsticks full of flavor. Marinated with soy sauce, rice vinegar, and ginger, then baked. Topped with sesame seeds and green onions for garnish", "price":"399" },' +
		'{ "type":"food","food":"nonveg", "name":"Chicken Lollipop", "description":"Indo-Chinese appetizers made from chicken drumettes. They are marinated, batter-fried, and served with a sweet and spicy sauce", "price":"399" },' +
		'{ "type":"food","food":"nonveg", "name":"Chicken65", "description":"Spicy, deep-fried chicken dish originating from Hotel Buhari, Chennai, India. Prepared using boneless chicken and served with an onion and lemon garnish", "price":"399", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Apollo Fish", "description":"Boneless fish marinated with spices and curry leaves. Spicy, hot, and super flavorful when fried, making it a delightful Indian meal", "price":"399" },' +
		'{ "type":"food","food":"nonveg", "name":"Chicken In Choice Of Sauce", "description":"Choice of sauces: CHILLI / HOT GARLIC / SCHEZWAN / MANCHOMIN", "price":"399", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Fish In Choice Of Sauce", "description":"Choice of sauces: CHILLI / HOT GARLIC / SCHEZWAN / MANCHOMIN", "price":"399", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Prawn In Choice Of Sauce", "description":"Choice of sauces: CHILLI / HOT GARLIC / SCHEZWAN / MANCHOMIN", "price":"429", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Smoked Sliced Lamb Dry In Choice Of Sauce", "description":"Choice of sauces: CHILLI / HOT GARLIC / SCHEZWAN / MANCHOMIN", "price":"499", "spicy":"hot" },'+

		'{ "type":"separator", "description":"SOUTH INDIAN" },' +
		'{ "type":"food","food":"veg", "name":"Podi Idli", "description":"Podi Idli, a quick South Indian breakfast featuring steamed idlis coated in spicy ground lentil condiment (Pod)", "price":"229" },' +
		'{ "type":"food","food":"veg", "name":"Chilli Idli", "description":"Fusion dish of fried idly tossed with oriental spices and soya chilli sauce", "price":"229", "spicy":"mild" },' +
		'{ "type":"food","food":"nonveg", "name":"Mriyalai Mamsun Vepudu", "description":"", "price":"529", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Rawa Fry Fish With Southern Spices", "description":"Mangalorean specialty featuring fish fillets coated in homemade masala and fine semolina (rava)", "price":"399" },' +
		'{ "type":"food","food":"veg", "name":"Aloo Gada Vepudu", "description":"", "price":"229" },' +
		'{ "type":"food","food":"nonveg", "name":"Green Chilli Kodi Andhra Style", "description":"Spicy Andhra-style dry chicken dish flavored mainly with green chilies", "price":"399", "spicy":"hot" },' +
		'{ "type":"food","food":"nonveg", "name":"Tawa Fried Rava Pomfret", "description":"Tawa crispy pomfret fry, tender inside and crispy outside, marinated with spices and pan-fried to perfection", "price":"599" },' +
		'{ "type":"food","food":"veg", "name":"Peregu Annam [Curd Rice]", "description":"South Indian favorite combining soft cooked rice with curd (yogurt), salts, and a flavorful tempering of spices and curry leaves", "price":"299" },' +
		'{ "type":"food","food":"veg", "name":"Nolu Pulu With Alam Chutney", "description":"Snack item made with split black grams, split Bengal grams, red chilies, tamarind, and aromatic spices, served with fiery ginger chutney", "price":"249" }'+
	']'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"PIZZA" },' +
		'{ "type":"food", "name":"MARGHERITA", "description":"Tomato sauce, mozzarella, organic oregano", "price":"18.00" , "spicy":"mild"},' +
		'{ "type":"food", "name":"PROSCIUTTO", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"21.50" },' +
		'{ "type":"food", "name":"SALAME", "description":"Tomato sauce, mozzarella, salami, organic oregano", "price":"21.00"},' +
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
		'{ "type":"separator", "description":"SWEETS OF BENGAL " },' +
		'{ "type":"food","food":"veg", "name":"Raj Bhog", "description":"", "price":"119" },' +
		'{ "type":"food","food":"veg", "name":"Gulab Jamun", "description":"", "price":"119" },' +
		'{ "type":"food","food":"veg", "name":"Lady Kenny", "description":"", "price":"119" },' +
		'{ "type":"food","food":"veg", "name":"Jol Bhora Sandesh", "description":"", "price":"149" },' +
		'{ "type":"food","food":"veg", "name":"Baked Rosogulla", "description":"", "price":"199" },' +
		'{ "type":"food","food":"veg", "name":"Baked Mihidana", "description":"", "price":"199" },' +
		'{ "type":"food","food":"veg", "name":"Mini Gulab Jamun With Rabri", "description":"", "price":"149" },'+

		'{ "type":"separator", "description":"ICE CREAM" },' +
		'{ "type":"food","food":"veg", "name":"Choice Of Ice Cream (2 Scoops)", "description":"Vanilla / Butter Scotch / Chocolate / Mango / Strawberry", "price":"249" },' +
		'{ "type":"food","food":"veg", "name":"Hot Brownie With Ice Cream", "description":"", "price":"249" },' +
		'{ "type":"food","food":"veg", "name":"Grand Sundae", "description":"", "price":"299" }' +
		']'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SINGLE MALT (30 ML)" },' +
'{ "type":"food", "name":"GLENFIDDICH 15 YR", "description":"", "price":"610" },' +
'{ "type":"food", "name":"GLENLIVET", "description":"", "price":"380" },' +
'{ "type":"separator", "description":"SCOTCH WHISKY (30 ML)" },' +
'{ "type":"food", "name":"J W BLUE LABLE", "description":"", "price":"1200" },' +
'{ "type":"food", "name":"JW. DOUBLE BLACK", "description":"", "price":"350" },' +
'{ "type":"food", "name":"CHIVAS REGAL", "description":"", "price":"350" },' +
'{ "type":"food", "name":"JW. BLACK LABEL", "description":"", "price":"300" },' +
'{ "type":"food", "name":"BALLANTINE’S", "description":"", "price":"280" },' +
'{ "type":"food", "name":"BLACK & WHITE 12 YR", "description":"", "price":"250" },' +
'{ "type":"food", "name":"TEACHER’S 50", "description":"", "price":"240" },' +
'{ "type":"food", "name":"J&B", "description":"", "price":"199" },' +
'{ "type":"food", "name":"JW. RED LABEL", "description":"", "price":"180" },' +
'{ "type":"food", "name":"TEACHER’S HIGHLAND", "description":"", "price":"180" },' +
'{ "type":"food", "name":"BLACK & WHITE", "description":"", "price":"180" },' +
'{ "type":"food", "name":"100 PIPPERS", "description":"", "price":"170" },' +
'{ "type":"food", "name":"VAT 69", "description":"", "price":"170" },' +
'{ "type":"food", "name":"BLACK DOG CENTENARY", "description":"", "price":"170" },' +
'{ "type":"food", "name":"WILLIAM LAWSONS", "description":"", "price":"170" },' +
'{ "type":"food", "name":"PASSPORT", "description":"", "price":"170" },' +
'{ "type":"separator", "description":"BOURBON WHISKEY (30 ML)" },' +
'{ "type":"food", "name":"JIM BEAM", "description":"", "price":"180" },' +
'{ "type":"separator", "description":"TENNESSE WHISKY (30 ML)" },' +
'{ "type":"food", "name":"JACK DANIELS", "description":"", "price":"299" },' +
'{ "type":"separator", "description":"IRISH WHISKY (30ml)" },' +
'{ "type":"food", "name":"JAMESON", "description":"", "price":"250" },' +
'{ "type":"separator", "description":"FINEST PREMIUM WHISKY (30 ML)" },' +
'{ "type":"food", "name":"STERLING RESRVE B-10", "description":"", "price":"150" },' +
'{ "type":"food", "name":"SIGNATURE", "description":"", "price":"150" },' +
'{ "type":"food", "name":"BLENDERS PRIDE RESERVE", "description":"", "price":"150" },' +
'{ "type":"food", "name":"ANTIQUETY BLUE", "description":"", "price":"130" },' +
'{ "type":"food", "name":"BLENDERS PRIDE", "description":"", "price":"130" },'+

'{ "type":"separator", "description":"VODKA (30 ML)" },' +
'{ "type":"food", "name":"GREY GOOSE", "description":"", "price":"350" },' +
'{ "type":"food", "name":"CEIROC", "description":"", "price":"350" },' +
'{ "type":"food", "name":"ABSOLUTE", "description":"", "price":"200" },' +
'{ "type":"food", "name":"SMIRNOFF GREEN APPLLE", "description":"", "price":"110" },' +
'{ "type":"food", "name":"SMIRNOFF", "description":"", "price":"100" },' +
'{ "type":"separator", "description":"COGNAC (30ML)" },' +
'{ "type":"food", "name":"HENNESSY", "description":"", "price":"882" },' +
'{ "type":"separator", "description":"RUM (30 ML)" },' +
'{ "type":"food", "name":"BACARDI LEMON", "description":"", "price":"110" },' +
'{ "type":"food", "name":"BACARDI WHITE", "description":"", "price":"100" },' +
'{ "type":"food", "name":"OLD MONK GOLD RESERVE", "description":"", "price":"100" },' +
'{ "type":"separator", "description":"GIN (30 ML)" },' +
'{ "type":"food", "name":"BOMBAY SAPPHIRE", "description":"", "price":"220" },' +
'{ "type":"separator", "description":"TEQUILA (30 ML)" },' +
'{ "type":"food", "name":"BLANCO / GOLD", "description":"", "price":"230" },' +
'{ "type":"separator", "description":"LIQUEUR (30 ML)" },' +
'{ "type":"food", "name":"SAMBUCA", "description":"", "price":"220" },' +
'{ "type":"food", "name":"BAILEY’S", "description":"", "price":"200" },' +
'{ "type":"separator", "description":"BEER" },' +
'{ "type":"food", "name":"HEINEKEN", "description":"", "price":"450" },' +
'{ "type":"food", "name":"BUDWISER MAGNUM", "description":"", "price":"400" },' +
'{ "type":"food", "name":"CORONA", "description":"", "price":"400" },' +
'{ "type":"food", "name":"BIRA (650ML)", "description":"", "price":"400" },' +
'{ "type":"food", "name":"CARLSBERG", "description":"", "price":"350" },' +
'{ "type":"food", "name":"TUBORG", "description":"", "price":"300" },' +
'{ "type":"food", "name":"KINGFISHER", "description":"", "price":"300" },' +
'{ "type":"food", "name":"BIRA WHITE (330 ML)", "description":"", "price":"280" },' +
'{ "type":"food", "name":"L.AB BACARDI BREEZER", "description":"", "price":"220" },' +
'{ "type":"separator", "description":"RED WINE GLASS / BOTTLE" },' +
'{ "type":"food", "name":"HOUSE WINE", "description":"", "price":"300 / 1900" },' +
'{ "type":"food", "name":"IMPORTED", "description":"", "price":"460 / 2750" },' +
'{ "type":"separator", "description":"WHITE WINE GLASS / BOTTLE" },' +
'{ "type":"food", "name":"HOUSE WINE", "description":"", "price":"300 / 1900" },' +
'{ "type":"food", "name":"IMPORTED", "description":"", "price":"460 / 2750" },' +

'{ "type":"separator", "description":"COCKTAIL" },' +
'{ "type":"food", "name":"LONG ISLAND ICE TEA", "description":"Long Island Iced Tea is a type of alcoholic mixed drink typically made with vodka, tequila, light rum, triple sec & gin toppled on ice", "price":"749" },' +
'{ "type":"food", "name":"TAQUILA SUNRICE", "description":"cocktail made of tequila, orange juice, and grenadine syrup", "price":"559" },' +
'{ "type":"food", "name":"MARGARITA", "description":"tequila, orange liquor and lime juice served with salt on the rim of the glass", "price":"559" },' +
'{ "type":"food", "name":"GRAND SPECIAL", "description":"", "price":"559" },' +
'{ "type":"food", "name":"GIMLET", "description":"cocktail blended with gins, sugar syrup and lime juice", "price":"453" },' +
'{ "type":"food", "name":"MOJITO", "description":"white rum, sugar, lime juice, soda water, and mint. Its a combination of sweetness with citrus, and herbaceous mint flavors", "price":"349" },' +
'{ "type":"food", "name":"PINACOLADA", "description":"a sweet cocktail made from rum, coconut cream / coconut milk, and pineapple juice, served with blended ice", "price":"349" },' +
'{ "type":"food", "name":"APPLE TINI", "description":"vodka and apple juice these tasty Apple Martinis are perfect for a little rest and relaxation", "price":"349" },' +
'{ "type":"food", "name":"WHISKY SOUR", "description":"whiskey, lemon juice and sugar with a dash of egg white[optional]", "price":"349" },' +
'{ "type":"food", "name":"COSMOPOLITON", "description":"vodlka, triple sec, cranberry juice, with freshly squeezed lime juice", "price":"349" },' +
'{ "type":"food", "name":"DAIQUIRI", "description":"a unique blend of rum, citrus juice, and sugar or other sweetener", "price":"349" },' +
'{ "type":"food", "name":"SCREWDRIVER", "description":"screwdriver is a popular alcoholic highball drink made with a unique blend of orange juices and vodka", "price":"349" },' +
'{ "type":"food", "name":"PINK VODKA LAMONADE", "description":"Combination of cranberry juice, vodka and lemonade", "price":"349" },'+

'{ "type":"separator", "description":"MOCKTAIL" },' +
'{ "type":"food", "name":"Arnold Palmer", "description":"Ice Tea With Lemonade", "price":"199" },' +
'{ "type":"food", "name":"Sweet Sunrise", "description":"Orange Juice With Grenadine Syrup", "price":"199" },' +
'{ "type":"food", "name":"Pomegranate Mojito", "description":"Pomegranate Juice, Mint Leaves & Lemon Club Soda", "price":"199" },' +
'{ "type":"food", "name":"Coconut Martini", "description":"Pine Apple Juice, Vanilla Ice Cream & Coconut Milk", "price":"199" },' +
'{ "type":"food", "name":"Trance Rainbow", "description":"Pineapple Juice, Lemonade, Blue Courage, Grenadine Syrup", "price":"199" },' +
'{ "type":"food", "name":"Iced Chocolate", "description":"Chocolate Ice Cream, Chocolate Syrup & Coffee", "price":"199" },' +
'{ "type":"food", "name":"Sparkling Blue", "description":"Blue Courage, Lemonade", "price":"199" },' +
'{ "type":"food", "name":"Strawberry Margarita", "description":"Drink Made With Strawberries Crush, Orange And Lime Juices", "price":"199" },' +
'{ "type":"food", "name":"Fruit Punch", "description":"Mock tail Blended With Vanilla Ice Cream, Mixed Fruit Garnished With Fresh Pomegranate", "price":"199" },' +
'{ "type":"food", "name":"Cindrella", "description":"Mix With Orange Juice, Pineapple Juice & Lemonade", "price":"199" },' +
'{ "type":"food", "name":"Cold Coffee", "description":"", "price":"199" },' +
'{ "type":"food", "name":"Shake [Choose Your Flavour]", "description":"Vanilla, Chocolate, Strawberry, Mango", "price":"199" },' +
'{ "type":"food", "name":"Lassi", "description":"", "price":"199" },' +
'{ "type":"food", "name":"Butter Milk [Chach]", "description":"", "price":"149" },' +
'{ "type":"food", "name":"Masala Soft Drinks", "description":"", "price":"99" },' +
'{ "type":"food", "name":"Aerated Drinks", "description":"", "price":"99" },' +
'{ "type":"food", "name":"Fresh Lime Soda", "description":"", "price":"99" },' +
'{ "type":"food", "name":"Gondhoraj Lebur Sorbot", "description":"", "price":"99" },' +
'{ "type":"food", "name":"Package Drinking Water", "description":"", "price":"39" },' +

'{ "type":"separator", "description":"HOT BEVERAGE" },' +
'{ "type":"food", "name":"Tea", "description":"Ginger, Lemon, Black", "price":"49" },' +
'{ "type":"food", "name":"Masala Tea", "description":"", "price":"49" },' +
'{ "type":"food", "name":"Coffee", "description":"", "price":"49" }' +


		' ]'
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

			 if (items[i].spicy) {
                let numChilies = items[i].spicy === "hot" ? 2 : items[i].spicy === "mild" ? 1 : 0;
                for (let j = 0; j < numChilies; j++) {
                    let chiliIcon = document.createElement("span");
                    chiliIcon.setAttribute("class", "chili-icon fas fa-pepper-hot");
                    menuitemname.appendChild(chiliIcon);
                }
            }
 
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
