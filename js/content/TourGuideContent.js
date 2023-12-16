function TourGuideContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `

    <style>
     #content{
        color: white; /* color of font */
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; /* no tail font is more readable for small font */
        font-size: 20px;
    }
    </style>

      <h4>The Tour Guides</h4>
      <p>
        Here are some really cool Tour Guides that will show you around the travel destinations  . 
      </p>
    `;

    var TourGuide = document.createElement("div");
    TourGuide.innerHTML = content;

    var TourGuideContainer = document.createElement("div");
    TourGuide.appendChild(TourGuideContainer);

    var yourTourGuide = MakeTourGuide({ name: "Bob",price: 20, rating: 5 , tgimage: "pics/abha.jpg"});
    TourGuideContainer.appendChild(yourTourGuide);

    var myTourGuide = MakeTourGuide({ name: "Sherry", price: 35, rating: 4.5 , tgimage: "pics/ed.jpg" });
    TourGuideContainer.appendChild(myTourGuide);

    var defaultTourGuide = MakeTourGuide({});
   TourGuideContainer.appendChild(defaultTourGuide);

    

  //  var yourEmpObj = MakeEmp("Tony", "Engineer", 2500);
  //  empContainer.appendChild(yourEmpObj);

    return TourGuide;
}