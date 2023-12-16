"use strict"; 

function EditListContent() {
    var container = document.createElement("div");
    var restaurantListDiv = document.createElement("div");
    container.appendChild(restaurantListDiv);

    //var ele = document.createElement("div");
    //ele.innerHTML = content;

    ajax("json/restaurants.json", processRestaurantList, restaurantListDiv);

    function processRestaurantList(restaurantList) {

        // Defining the edit area and how values will be validated.
        var restaurantInputSpecs = [
            {
                "prompt": "User Email: ",
                "fieldName": "userEmail",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "Restaurant Picture (URL): ",
                "fieldName": "pic",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "Busiest Day: ",
                "fieldName": "busiest_day",
                "dataType": "string",
                "minLen": 6, // means optional
                "maxLen": 10
            },
            {
                "prompt": "Restaurant Rating: ",
                "fieldName": "rating",
                "dataType": "string",
                "minLen": 0, // means optional
                "maxLen": 10, // 10 characters including decimal point
                "rangeLow": 0,
                "rangeHigh": 10
            },
            {
                "prompt": "Favorite Food: ",
                "fieldName": "favoriteFood",
                "inputType": "radio",
                "choices": ["Fries", "Soup", "Ribs", "cake"],
                "selected": "Soup" // meaning the second choice is pre-checked --> IST.
            },
            {
                // tried to do a select tag but didn't really work I don't know why 
                "prompt": "What Age group are you in?: ",
                "fieldName": "ageGroup",
                "inputType": "select",
                "choices": ["0-15", "16-25", "26-40", "41+"],
                
            },
          
        ];

        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.pic}'/> <span>${obj.userEmail}</span>";

        restaurantListDiv.appendChild(MakeInsertEditDeleteList(restaurantList, restaurantInputSpecs, displayTemplate));
    }
    



    // start of carsList
    var carListDiv = document.createElement("div");
    container.appendChild(carListDiv);

    ajax("json/cars.json", processCarsList, carListDiv);

    function processCarsList(carList) {

        // Defining the edit area and how values will be validated.
        
        var carInputSpecs = [
            {
                "prompt": "Car make: ",
                "fieldName": "make",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "Car Photo (URL): ",
                "fieldName": "photo",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "Car Condition: ",
                "fieldName": "condition",
                "dataType": "string",
                "minLen": 0, // means optional
                "maxLen" : 50
            },
            {
                "prompt": "Car Price: ",
                "fieldName": "price",
                "dataType": "number",
                "minLen": 3, // means optional
                "maxLen": 10 // 10 characters including decimal point
                 
            }
        ];

        
        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.photo}'/> <span>${obj.make}</span>";

        carListDiv.appendChild(MakeInsertEditDeleteList(carList, carInputSpecs, displayTemplate));
    }
    return container;
    // carListComponent

}