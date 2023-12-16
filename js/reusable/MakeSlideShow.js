function MakeSlideShow(objList, style) {

    //slideshow properties are expecting a caption and an image




    var slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    div.append(myImage);

    var captionDiv = document.createElement("div");
    slideShow.appendChild(captionDiv);

    var buttonDiv = document.createElement("div");
    slideShow.appendChild(buttonDiv);

    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    buttonDiv.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    buttonDiv.appendChild(fwdButton);



    // private variable that keeps track of which image is showing
    var picNum = 0;
    setPic();

    function setPic() {
        myImage.src = objList[picNum].fileName;
        captionDiv.innerHTML = objList[picNum].caption;
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < objList.length - 1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }



    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;


    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < objList.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            setPic();
        }
    };
    //set caption function
    slideShow.SetCaption = function () {
        slideShow.style.caption = "john";
        Setcaption();
    };


    return slideShow;
}