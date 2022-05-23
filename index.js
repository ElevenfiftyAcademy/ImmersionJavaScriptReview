/*
Declare and initialize variables for each of the following:
  myName (string),
  bestFriend (string),
  favoriteThings (array),
  and myPet (object - with key/value pairs of petName/string, petAge/int, isGood/boolean)
*/





//------------------------------------------
// Print "Hello, my name is <Your Name>!" to the console



// Using DOM manipulation add an H1 tag to the main element's <div> with the id of "mainElementContent" of our HTML with the phrase above. (Hint: you can can pass your variable to a display function, set the string interpolation to a variable, etc. Use Google or refer to your Foundations notes for a refresher of an example on building the logic.)





//--------------------------------------
/*
Lets compare our name to our best friend's name and eventually add that information to the <aside> of our page!

1) Find the length of each name.
2) Write and use a conditional to see who has the longer name. Assign a string interpolation of whose name is longer to a variable and console.log it.
  Example Result: My name is longer than <shorter name>'s.
3) Update the conditional to also calculate how many letters difference there are between the two names and add that to the string interpolation.
  Example Result: My best friend <bestFriend>'s name is shorter than mine by 3 letters.

There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/





/*
Just as we have before, let's practice creating a text element and adding that via DOM manipulation to the page.
This time we want to slightly refactor the name comparison logic from above to allow us to pass the console.log messages through to a display function.

How can we do this? There are a few ways, but let's try a basic format of:
1) Declaring a variable of nameMessage before our conditional statement.
2) In each comparison, reassign the variable to the console.log contents.
3) We now have a variable to pass to a display function, time to build another function that creates and appends a text element! Remember to add the element(s) made to the <aside> of our HTML.
*/





//-------------------------------------------
/*
Let's build two more rounds of practice!
Create logic to display the contents of your favoriteThings array via DOM manipulation to our main element <div> again.

Be sure to add in a text element of an H3 to title this section's content such as "These are a few of my favorite things:" or "My favorite things are:" to make our site more approachable!

Arrays have a number of methods, use the .sort() method first to alphabetically sort your favoriteThings and then use the .forEach() method to house logic to create and add a <li> tag element for each item of our array. (Psst, don't forget what other tag is needed for list items.)

Make sure to use your resources, there are lots of creative ways to construct how this one is built and functions!
*/





//------------------------------------------
/*
Now for our final round of practice! 
Let's build a way to display our pet's info to the <article> element of our page.

We can again:
1) Construct a display function.
2) Create a text element as a title for the section (H3) as well as other text elements to display our pet's name, age, and if they've been good or bad. 
3) Assign all the corresponding data to the elements. 
4) Append all our new elements to the article of our HTML.

Here are some optional fun stretch goals for adding a little extra "spice" to this one: 
- Add an img tag and give it a src of your pet (if you don't have one, check out unsplash.com for free images; also be sure to make an images folder to hold your local media files).
- Create a if/else that prints a detailed phrase if they've been good or bad. 
- Construct a conditional depending on their age if they're a puppy/kitten, adult, or senior.
*/