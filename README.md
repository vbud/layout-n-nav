[Check out the demo] to see the working solutions!

# Exercise 1

Using valid HTML and CSS, create a document with three-column layout. The left and right columns are fixed width, 180px and 200px respectively, and the middle column is liquid, expanding to fill the available space. Ensure that this code works in the top 3 browsers by market share.
 
## Solution

See `app/index.html` and `app/styles/main.scss`. I used flexbox since it works in IE11+, Chrome since v29, and Firefox since v28.

If you need a solution that functions in older browsers, I can make a float-based or absolute-positioning-based layout.

Bonus: my solution is responsive too!


# Exercise 2

Write a short, HTML drop-down menu using native JavaScript to control its behavior (bonus points for reusability). The menu should begin with a single button that reveals a drop-down with 5 menu items when you hover over it. Hovering over one of the 5 menu items should reveal a second drop-down menu to the right of the original menu with an additional 5 items.

## Solution

See `app/index.html` and `app/styles/main.scss` I was actually able to do this with just HTML and CSS.

I was going to use JavaScript, but the exercise said "bonus points" for reusability, and the CSS solution is simple and reusable. I added a bonus fourth level to show how easy it is to reuse - you can just keep adding on new lists as children of existing lists using identical markup (see lines 49-58 of `app/index.html`).
