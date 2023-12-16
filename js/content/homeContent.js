function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

    var content = `
    <style>
     #content{
        
        background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.527)), url(pics/MyWebsite_sunsetBeach_backgroundImage.jpg); /*Used linear gradient to make the background image darker to be able to see the words  */
        background-size: cover;
        background-position: center;
        height: max-content;
        color: white; /* color of font */
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; /* no tail font is more readable for small font */
        font-size: 20px;

       
    }
    </style>

        <h2>The purpose of my Website</h2>
        <p>
            The Purpose of my website is to allow people to see different travel places where they might want to go to in the futre.
            The website will include travel tips and different activities that you can do at these travel locations.
            The website will also include different restuarants that could be nice to eat at and will include a link to a website that offers discounted flights for students.
            The link for that website could be found here <a href= "https://www.studentuniverse.com/visitors?partner=bing&partnerTracking=bing_brand_exact&msclkid=cf484b9533c81a8953da289eab6e7d5f" <h1> Book a Flight</h1></a>

        </p>

        <p>
            You should use this website because instead of searching in the search bar for flights you can just easily use the link I have provided and it will take you to a site that offers cheap deals for flights.
            This website also can help if you are deciding on what place you want to travel to since this website will give details about different travel spots.

        </p>


          <p style="text-align:center;">
                <img src="pics/planeImage_websitehw1.png" style="width:20%; border-radius:10px;">
            </p>
    
    
  
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }