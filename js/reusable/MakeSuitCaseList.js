"use strict";

function MakeSuitCaseList(params) {

    function MakeSuitCase(suitCaseObj) {

        var price = suitCaseObj.price || "Call for price of suit case";
        var size = suitCaseObj.size || " check store for size";
        var imgURL = suitCaseObj.imgURL || "pics/nowhiteDefaultSuitcase.jpg";
        var numrate = 0;
        // have to add an event handler to this code


        var SuitCaseDiv = document.createElement("div");

        //add my suitcase div to the styling sheet for my suitcase
        SuitCaseDiv.classList.add("suitCase");


        // creating my infor div for my suitcase
        var infoDiv = document.createElement("div");
        SuitCaseDiv.appendChild(infoDiv)


        // create img DOM element and set it's src attribute
        var SuitCaseImg = document.createElement("img");
        SuitCaseImg.src = imgURL;
        SuitCaseImg.classList.add("SuitCaseImg");
        SuitCaseDiv.appendChild(SuitCaseImg);

        var rateImg = document.createElement("img");
        rateImg.src = "pics/nowhiteStar.jpg";
        rateImg.classList.add("icon");
        SuitCaseDiv.appendChild(rateImg);

        rateImg.onclick = function () {
            numrate++;
            display();
        };


        var starSpan = document.createElement("span")
        SuitCaseDiv.appendChild(starSpan);


        function display() {
            infoDiv.innerHTML = " price: " + formatCurrency(price) + "<br/> size:" + size + "<br/>";
            starSpan.innerHTML = "Rating:" + numrate;
        }


        //display the information 
        display();


        // private function, can only be used within MakeCar
        function formatCurrency(num) {
            if (isNaN(num)) {
                return num;
            } else {
                var numNum = parseFloat(num);
                return numNum.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
            }
        }

        return SuitCaseDiv;
    }

    // check input parameter object... 
    if (!params || !params.SuitCaseObjArray || !params.SuitCaseObjArray[0]) {
        throw "function MakeSuitCaseList requires a paramter object that has a property " +
        "named 'SuitCaseObjArray' which is an array with at least one element.";
        // stops execution after the above message appears in Chrome's console (in red)
    }

    var SuitCaseObjArray = params.SuitCaseObjArray;
    var fitInOverHead = params.updated || "Not Sure";


    var containerDiv = document.createElement("div");
    containerDiv.classList.add("SuitCaseList");

    var updateMsg = document.createElement("h4");
    updateMsg.classList.add("updatedOn");
    updateMsg.innerHTML = "Will this suit Case fit in over head? " + fitInOverHead;
    containerDiv.appendChild(updateMsg);

    var SuitCaseHolderDiv = document.createElement("div");
    SuitCaseHolderDiv.classList.add("SuitCaseHolder");
    containerDiv.appendChild(SuitCaseHolderDiv);


    for (var theSuitCaseObj of SuitCaseObjArray) {
        SuitCaseHolderDiv.appendChild(MakeSuitCase(theSuitCaseObj));
    }

    return containerDiv;
}