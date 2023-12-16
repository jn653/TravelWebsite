function UserContent() {

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


    ajax("json/users.json", processData, container);

    function processData(userList) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(userList);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var newUserList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < userList.length; i++) {

            newUserList[i] = {};
            // Don't show the id (no meaningful data)
            newUserList[i].Image = SortableTableUtils.makeImage(userList[i].image, "10rem");
            newUserList[i].Email = SortableTableUtils.makeText(userList[i].userEmail);
            // Don't show the password
            newUserList[i].Birthdate = SortableTableUtils.makeDate(userList[i].birthday);

            // true means format like currency
            newUserList[i].MembershipFee = SortableTableUtils.makeNumber(userList[i].membershipFee, true);

            newUserList[i].Role = SortableTableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
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
        var myclickSort = MakeClickSortTable("Users", newUserList, "Birthdate", "icons/blackSort.png");
        container.appendChild(myclickSort);

        
        //function MakeClickSortTable(title, objList, sortOrderPropName, sortIcon) {
    }

    return container;
}