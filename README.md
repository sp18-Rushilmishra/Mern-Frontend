Week 1: HTML Foundations
 Day 1 – Mon, 16th June 2025
HTML syntax is not case-sensitive.

Introduced to essential structure and layout.

Every document starts with <!DOCTYPE html> to specify HTML5.

Headings range from <h1> (most important) to <h6>.

<br> is a self-closing tag that adds a line break.

Attributes enhance tags with more functionality.

The src in <img> supports absolute and relative URLs.

<pre> retains text formatting like spaces and line breaks.


Day 2 – Tue, 17th June 2025
Explored inline vs block elements.

Block elements span full width; inline only wraps content.

Nesting rules: block can contain inline, but not vice versa.

<iframe> embeds other web pages.

<video> and <audio> handle multimedia.

YouTube embeds use <iframe src="https://www.youtube.com/embed/VIDEO_ID">.

Enable autoplay/mute using ?autoplay=1&mute=1.


Day 3 – Wed, 18th June 2025
Block elements can be laid out side-by-side with float, inline-block, or Flexbox.

Use margin: auto for horizontal centering.

CSS Grid: layout with display: grid and grid-template-columns.

Plugins extend functionality using <object>, <embed>, etc.

HTML tables allow merged rows/columns using rowspan, colspan.

Use table-layout: fixed to control table widths.


Day 4 – Thu, 19th June 2025
Forms are built using <form>.

<label> tags improve accessibility.

<input> types: text, checkbox, radio, submit, etc.

The name attribute is required for data submission.

<select> and <option> create dropdowns.

<textarea> allows multiline input.

<fieldset> groups related inputs; <legend> gives a label.

<datalist> provides auto-suggested values.


Day 5 – Fri, 20th June 2025
If both internal and external CSS exist, the last loaded rule wins.

Inline styles take highest priority.

RGBA allows transparency with values from 0 to 1.

Flexbox: justify-content aligns items on main axis; align-items on cross axis.

Explored spacing tools like margin, padding, border.

Git basics: init, checkout -b, push, pull, merge.

Avoid git add . to prevent unwanted files.

Week 2: JavaScript Begins + CSS Practice
Day 6 – Mon, 23rd June 2025
JavaScript variable types: var, let, const.

var: function-scoped, hoisted, can re-declare.

let: block-scoped, can reassign but not re-declare.

const: block-scoped, can't reassign or re-declare.

Only var is hoisted fully.

JS primitive types: string, number, boolean, bigint, null, undefined, symbol, object.


Day 7 – Tue, 24th June 2025
JS operations proceed left-to-right:

5 + 5 + "hi" = 10hi, "hi" + 5 + 5 = hi55.

Learned to make designs responsive using @media.

Started working on html-css-task mini-project.


Days 8–10 – 25th to 27th June 2025
Created multiple sections with containers for layout control.

Applied CSS grid, flex, and spacing utilities.

JS used to build a toggleable navbar and scroll-to-top button.

Ensured breakpoint-specific styling with media queries.

Used semantic tags like <section>, <main> for clean markup.

Prefer px over % for consistent sizing.

Used z-index, overflow, max-width, and width: 100% for modern, fluid designs.

Week 3: Arrays, Objects, Functions

Day 11 – Mon, 30th June 2025
JS strings: slice(), split() – strings are immutable.

Arrays: push(), pop(), shift(), unshift(), splice(), slice().

typeof [] returns object.

Array sorting needs a comparator for numbers.

Learned iteration: forEach(), map(), filter(), flatMap().



Objects hold data in key-value pairs.

Accessed data via dot and bracket notations.

Deleted properties with delete obj.key.

Used nested objects and loops like for...in.

Learned Object.keys(), Object.values(), Object.entries().


Day 13 – Wed, 2nd July 2025
Explored:

Function declarations

Function expressions

Arrow functions

Used default and rest parameters (...args).

Practiced IIFE (Immediately Invoked Function Expressions).


Week 4: Execution, Async, DOM, Events

Day 14 – Thu, 3rd July 2025
JS runs in two steps:

Creation – memory setup

Execution – code runs

Each function adds to the call stack.

Lexical scope enables closures.

Hoisting varies: var gets undefined, let/const enter TDZ.

Day 15 – Fri, 4th July 2025
Async JS allows non-blocking behavior.

setTimeout, setInterval run in background.

Promises introduced:

then(), catch(), finally()

Promise.all(), Promise.race(), Promise.allSettled()

Day 16 – Mon, 7th July 2025
async/await simplifies promise chains.

await pauses execution until resolution.

Used try...catch to handle errors cleanly.


Day 17 – Tue, 8th July 2025
DOM = browser's representation of HTML structure.

Element selection using:

getElementById, querySelector, querySelectorAll

Manipulated content via textContent, innerHTML.

Added/removed nodes with createElement, appendChild, removeChild.

Day 18 – Wed, 9th July 2025
Event listeners added using addEventListener().

Event object: target, type, preventDefault(), etc.

Event bubbling/capturing handled with stopPropagation().

Debouncing/throttling improves performance.


Day 19 – Thu, 10th July 2025
Mini project combining everything:

Theme toggle

Tab switcher

API fetch and display

Practiced full interaction cycle: UI → JS → DOM Update.
