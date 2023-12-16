
    function blogContent() {

    // ` this is a "back tick".Use it to define multi - line strings in JavaScript.
        var content = `
        <h1> My Blog</h1>

         <p>
               The fields that will be included in my database are as followed.
           </p>
              <p> Restaraunt reviews (name of the table)</p>
            <ul>
                <li>customer reviews (1000 characters) </li>
                <li>Prices of the different restaurants (this will be an integer number)</li>
                <li>review image (string of characters)</li>
                <li>Rating of the restaurant (integer number) </li>
                <li>Busiest days of the week (this will be a string character)</li>
            </ul>
            <p>
                My web design/development experience is okay. I have made two websites in the past with different links that take you to different pages of my website. I made one in my freshman year of college and I have also made one a few months back in my free time jsut for fun. The one I made in my free time isn't perfect but it has different elements in it like a drop down menu bar that has clickable links that take you to my next page and it also has hover over designs that changes the color of different words that you hover over. I also have animation in my website that I made on my free time which is just a basic slide back and forth animation for one of my text box.
            </p>

            <h4> Homework 1 assignment</h4>

            <p>
                What I found easy about this homework was the changing the colors of the website and adding a backgorund image to my website. The thing I found hard was making the title nav responsive. Im still not that good at making title navs responsive so that was very hard for me and what I found confusing was the part about the datbase table because the instructions were just confusing and I'm still not sure if i actually created the database correctly even after all the emails and the instructions'. I think this homework was valuable because it is helping us practice creating a website and the different things we can do with a website. I enjoy making websites so I'm looking forward to completing this website.
            </p>

         <h4>Homework 2 assignment</h4>
            <p>What i found easy about this homework was the changing the colors using the mynav file. What I found hard was getting my webpage to display the code I have wrote for the blog content and the home page content because I wrote stuff but it doesn't appear sometimes and I don't know why.


      <h4>Homework 3 assignment</h4>
      
        <p> What I found easy about this is assignment was maybe making the make content, the start of the make content i should say. What i found hard/ confusing about this assingment was everything. This assignement was hard to me due to the fact that most of the things I was doing I barely knew how to do or set up like putting in an image parameter that accepts it. My image was not working and I tried a bunch of things. What i found useful about this assignment was maybe learning about content generating functions. </p>

    <h4> Homework 4 assignment</h4>
    <p>
        what I found easy about this assignment was making the content generating function. I feel like Im a little used to it now after doing a couple.
        What was confusing was changing the size of my event handler which was the star. I still couldnt change the size of it even after changing the width. I dont know why.
        What I think was valuable about this assignment was learning how to make more event handlers and adding more object arrays.

    </p>

        <h4> Homework 5 assignment</h4>
        <p>WHat I found easy about this assignment was adding the caption and image but what I found hard was making a public function to change something in the div. I was trying to make one to change the width of
        the div but I was having a hard time and I also tried to make one to change the caption but it wasn't working at all so I couldn't do the instructions to make a public function. overall I think the assignment contributed to us learning about how to read from ajax files which was nice</p>


        <h4> Homework 6 assignment </h4>
            <p> What i found easy about this assignment was adding the json information to the table.
                after seeing professor do it in class it was pretty simple. What I found challenging was
                 making the table sort in reverse, even though I did it for the lab portion it was hard to implement
                    it for this hw assignement </p>

<h4> Homework 8 assignment</h4>
<p> What I found easy was making the edit area div. What I found hard was implementing the second input type. Everything else was kind of easy to do after a little while </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}