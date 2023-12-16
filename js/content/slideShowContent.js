/* 
 * Any JS code that we have stored under folder "js/components" is code that will 
 * output content that the router will inject into the content area. 
 * 
 * These functions take no input parameters (router is not supplying any) and 
 * they output a single DOM element (usually a div) that the router willl 
 * inject into the content area.
 * 
 * These functions ARE ALLOWED to know everything about the HTML page and any 
 * CSS rules that are available to the HTML page. They are non-reusable components 
 * written by the HTML coder.
 */


function slideShowContent() {

    var content = `

    <style>
        .slideShowContainer {
            display:flex; 
            flex-direction: row;
        }
        .slideShow {
            box-sizing: border-box; 
            width: 50%;
        }
        .slideShow WidthButton{
            width:20%;
        }

    /* this is for desktop mode*/
@media only screen and (min-width: 30rem) {
    .slideShowContainer {
        flex-direction: row;
    }
   .slideShow {
            box-sizing: border-box;
            width: 50%;
        }
        .slideShow WidthButton{
            width:20%;
        }
}
    </style>
`;


    

    var container = document.createElement("div");
    container.innerHTML = content;
    container.classList.add("slideShowContainer");

    ajax("json/cars.json", processCarsList, document.getElementById("content"));

    function processCarsList(CarsList) {


        // MakeSlideShow expects a property called "image", so provide that... 
        for (var i = 0; i < CarsList.length; i++) {
            CarsList[i].fileName = CarsList[i].photo;
            CarsList[i].caption = "Make:" + " " + CarsList[i].make + "</br>" + "price:" + " $" + CarsList[i].price;
            //console.log("image " + i + " " + funList[i].image);
        }

        console.log("CarsList after setting image properties");
        console.log(CarsList);
        var ss = MakeSlideShow(CarsList, "slideShow");
        container.appendChild(ss);

        // Example showing why you need to get the ss reference, so the HTML page can invoke 
        // any public methods that may be available from the returned slide show object.
       // ss.setPicNum(1);


    }


    ajax("json/other_cats.json", processOtherCatsList, document.getElementById("content"));

    function processOtherCatsList(OtherCatsList) {


        // MakeSlideShow expects a property called "image", so provide that... 
        for (var i = 0; i < OtherCatsList.length; i++) {
            OtherCatsList[i].fileName = OtherCatsList[i].image;
            OtherCatsList[i].caption = "Nickname:" + " " + OtherCatsList[i].nickname +"</br> "+ "Gender: " + " " + OtherCatsList[i].sex;
        }

        console.log("OtherCatsList after setting image properties");
        console.log(OtherCatsList);
        var ss2 = MakeSlideShow(OtherCatsList, "slideShow");
        container.appendChild(ss2);

        // Example showing why you need to get the ss reference, so the HTML page can invoke 
        // any public methods that may be available from the returned slide show object.
       // ss.setPicNum(1);

        
    }
    // captionbutton to change the width
    var CaptionButton = document.createElement("button");
    CaptionButton.innerHTML = "change slideshow caption";


    //on click caption button function 
    CaptionButton.onclick = function () {
        /*ss1.caption = "john"*/
        ss1.style.caption = "caption changed"
    };

    container.appendChild(CaptionButton);

   




    var myobjList = [
        { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png", caption: "Carla" },
        { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png", caption: "Lucilla" },
        { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png", caption: "The A Team" }
    ];

    var ss1 = MakeSlideShow(myobjList, "slideShow");
    container.appendChild(ss1);

    //// Example showing why you need to get the ss reference, so the HTML page can invoke
    //// any public methods that may be available from the returned slide show object.
    //ss1.setPicNum(3); // sets array index to 3, if 3 is in bounds for the array.

    //// create second slideshow object
    //var otherobjList = [
    //    { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png", caption: "Carla" },
    //    { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png", caption: "Lucilla" },
    //    { fileName: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png", caption: "The A Team" }
    //];
    //var ss2 = MakeSlideShow(otherobjList, "slideShow");
    //container.appendChild(ss2);


    //var myPicList = [
    //    "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png",
    //    "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png",
    //    "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png"
    //];
    //var ss1 = MakeSlideShow(myPicList, "slideShow");
    //container.appendChild(ss1);


   


    return container;
}