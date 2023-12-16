function RestaurantContent() {

    var content = `

    <style>
        .UserContainer {
            display:flex; 
            flex-direction: row;
            color:black;

        }
   /* this is for desktop mode*/
@media only screen and (min-width: 30rem) {
    .UserContainer {
        flex-direction: row;
    }

    
        
    </style>
`;
    var container = document.createElement("div");
    container.innerHTML = content;
    container.classList.add("UserContainer");


    ajax("json/restaurants.json", processData, container);

    function processData(restaurantsList) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(restaurantsList);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var newrestaurantsList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < restaurantsList.length; i++) {

            newrestaurantsList[i] = {};
            // Don't show the id (no meaningful data)
            newrestaurantsList[i].pic = SortableTableUtils.makeImage(restaurantsList[i].pic, "10rem");
            newrestaurantsList[i].customer_price_would_pay = SortableTableUtils.makeNumber(restaurantsList[i].customer_price_would_pay);
            // Don't show the password
            newrestaurantsList[i].busiest_day = SortableTableUtils.makeText(restaurantsList[i].busiest_day);
            newrestaurantsList[i].userEmail = SortableTableUtils.makeText(restaurantsList[i].userEmail);

            // true means format like currency
            newrestaurantsList[i].price = SortableTableUtils.makeNumber(restaurantsList[i].price, true);

            newrestaurantsList[i].rating = SortableTableUtils.makeText(restaurantsList[i].rating);
        }

        /*    
         "webUserId": "2",
         "userEmail": "dominic@temple.edu",
         "userPassword": "p",
         "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/dominic.jpg",
         "birthday": "",
         "membershipFee": "$1,000.99",
         "userRoleId": "3",
         "userRoleType": "Member",
         "errorMsg": ""
         */

        // Making a DOM object, nothing shows yet... 
        var myclickSort = MakeClickSortTable("Restaurants", newrestaurantsList, "busiest_day", "icons/blackSort.png");
        container.appendChild(myclickSort);


        //function MakeClickSortTable(title, objList, sortOrderPropName, sortIcon) {
    }

    return container;
}