function MakeTourGuide(params) {
    if (!params) {
        throw "Error: MakeTourGuide requires a parameter object";
    }

    var TourGuide = document.createElement("div");

     TourGuide.name = params.name || "call for name of tour guide";
    var price = params.price || "call for price of tour guide";
    var rating = params.rating || "Call for rating of tour guide";
    var tgimage = params.tgimage|| "";
    console.log("tgimage is" + tgimage);

    TourGuide.classList.add("TourGuide");

    //image dom
    var TourGuideImg = document.createElement("img");
    console.log("tgimage is" + tgimage);
    TourGuideImg.src = tgimage;
    TourGuide.appendChild(TourGuideImg);

    var TourGuideInfo = document.createElement("div");
    TourGuide.appendChild(TourGuideInfo);


   // TourGuide.innerHTML = "Tour Guide name: " + name + "<br/> Price: " +
    //    formatCurrency(price) + "<br/>  Rating:" + rating;

    // public setName function 
    TourGuide.setname = function (newname) {
        TourGuide.name = newname;
        display();
    }

    // change rating function
    TourGuide.changeRating = function (changeRating) {
        var n = Number(changeRating);
        console.log("Changing rating by this much: " + n)
        rating = rating + n;
        display();
    }

    // private method display, populates the Info div with current values for 
    // name, price, rating, and image. 
    var display = function () {
        TourGuideInfo.innerHTML = "Tour Guide name: " + TourGuide.name + "<br/> Price: " +
            formatCurrency(price) + "<br/>  Rating:" + rating + " Stars";
    };


    //create user interface for name

    var namebutton = document.createElement("button");
    namebutton.innerHTML = "change name to:  ";
    TourGuide.appendChild(namebutton);

    var newnameInput = document.createElement("input");
    TourGuide.appendChild(newnameInput);

    namebutton.onclick = function () {
    TourGuide.setname(newnameInput.value);
    };

    TourGuide.appendChild(document.createElement("br")); // new line


    //create user interface for change rating
    var RatingButton = document.createElement("button");
    RatingButton.innerHTML = "Change rating by : ";
    TourGuide.appendChild(RatingButton);

    var RatingFactor = document.createElement("input");
    TourGuide.appendChild(RatingFactor);

    RatingButton.onclick = function () {
        TourGuide.changeRating(RatingFactor.value);
    };

   

    //function for formating the price 
    function formatCurrency(num) {
        if (isNaN(num)) {
            return num;
        } else {
            var numNum = parseFloat(num);
            return numNum.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
        }
    }


    display();
    return TourGuide;

}