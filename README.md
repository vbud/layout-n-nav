[Check out the demo][demo] to see the working solutions!

# Exercise 1

Using valid HTML and CSS, create a document with three-column layout. The left and right columns are fixed width, 180px and 200px respectively, and the middle column is liquid, expanding to fill the available space. Ensure that this code works in the top 3 browsers by market share.
 
## Solution

See [`app/index.html`][index-html] and [`app/styles/main.scss`][main.scss]. I used flexbox since it works in IE11+, Chrome since v29, and Firefox since v28.

If you need a solution that functions in older browsers, I can make a float-based or absolute-positioning-based layout.

Bonus: my solution is responsive too!



# Exercise 2

Write a short, HTML drop-down menu using native JavaScript to control its behavior (bonus points for reusability). The menu should begin with a single button that reveals a drop-down with 5 menu items when you hover over it. Hovering over one of the 5 menu items should reveal a second drop-down menu to the right of the original menu with an additional 5 items.

## Solution

See [`app/index.html`][index.html], [`app/scripts/main.js`][main.js], and [`app/styles/main.scss`][main.scss].

I went for what I think is a reusable approach - if you put the `menu` class on an element and structure the menu the same way, it will just work without any code changes.
 
If I have misunderstood the exercise in some way, please let me know!



[demo]: http://vbud.github.io/layout-n-nav/
[index.html]: https://github.com/vbud/layout-n-nav/blob/master/app/index.html
[main.js]: https://github.com/vbud/layout-n-nav/blob/master/app/scripts/main.js
[main.scss]: https://github.com/vbud/layout-n-nav/blob/master/app/styles/main.scss
