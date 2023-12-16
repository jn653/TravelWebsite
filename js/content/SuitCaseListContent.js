"use Strict";

function SuitCaseListContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>Different suitcases for your trip</h4>
      <p>
        These are some of the good suitcases you can use. <br> Click on star to give the suitcase a rating.
      </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    var mySuitCaseListDiv = MakeSuitCaseList({
        SuitCaseObjArray: [
            { price: 240, size: "large", imgURL: "pics/nowhiteLargeSuitCase.jpg" },
            {}, // this "suitcase object" should receive default values for condition and price... 

        ],
        updated: " no"
    });
    ele.appendChild(mySuitCaseListDiv);

    var yourSuitCaseListDiv = MakeSuitCaseList({
        SuitCaseObjArray: [
            { price: 80, size: "small", imgURL: "pics/nowhiteSmalleSuitcase.jpg" },
            { price: 140, size: "medium", imgURL: "pics/nowhiteMediumSuitCase.jpg" },
            { price: 200, size: "large", imgURL: "pics/nowhiteLargeSuitCase.jpg" }

        ],
        updated: "New cars"
        // if you dont provide updated, it will show "unknown" for update date...
        // for the rating you should click on the star image to incremet the rating the suitcase gets
    });
    ele.appendChild(yourSuitCaseListDiv)

    return ele;
}