import { Question } from "./types";

export const QUESTIONS: Question[] = [
  // ==========================================
  // PART 1: HTML (40 QUESTIONS)
  // ==========================================

  // Topic: Semantic Tags (8)
  {
    id: "h-sem-1",
    category: "HTML",
    topic: "Semantic tags",
    question: "What are HTML5 Semantic elements?",
    answer:
      "Semantic elements are those that clearly describe their meaning in a human- and machine-readable way. Examples include <article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, and <time>.",
  },
  {
    id: "h-sem-2",
    category: "HTML",
    topic: "Semantic tags",
    question: "What is the purpose of the <main> tag?",
    answer:
      "The <main> tag specifies the main content of a document. This content should be unique to the document and not contain any content that is repeated across pages, such as sidebars, navigation links, or logos.",
  },
  {
    id: "h-sem-3",
    category: "HTML",
    topic: "Semantic tags",
    question: "Difference between <section> and <article>?",
    answer:
      "<section> is a thematic grouping of content, typically with a heading. <article> represents a self-contained, independent piece of content that could be distributed or reused independently (like a blog post).",
  },
  {
    id: "h-sem-4",
    category: "HTML",
    topic: "Semantic tags",
    question: "What is the role of <aside>?",
    answer:
      "The <aside> element defines content that is indirectly related to the main content (like a sidebar, pull-quotes, or advertisements).",
  },
  {
    id: "h-sem-5",
    category: "HTML",
    topic: "Semantic tags",
    question: "How does semantic HTML help SEO?",
    answer:
      "Search engine crawlers use semantic tags to identify the most important parts of a page (like headers and articles), improving indexing accuracy and page relevance.",
  },
  {
    id: "h-sem-6",
    category: "HTML",
    topic: "Semantic tags",
    question: "What is the <figure> and <figcaption> tag used for?",
    answer:
      "<figure> is used to encapsulate media content like images, diagrams, or code snippets. <figcaption> provides a visible caption or legend for that content.",
  },
  {
    id: "h-sem-7",
    category: "HTML",
    topic: "Semantic tags",
    question: "Why use <nav> instead of just <ul>?",
    answer:
      "The <nav> tag explicitly identifies a section of navigation links, allowing assistive technologies and search engines to quickly find the primary site navigation.",
  },
  {
    id: "h-sem-8",
    category: "HTML",
    topic: "Semantic tags",
    question: "What is the <header> tag used for?",
    answer:
      "The <header> element represents introductory content, typically a group of introductory or navigational aids, often containing a logo, search form, or author name.",
  },

  // Topic: Attributes (8)
  {
    id: "h-attr-1",
    category: "HTML",
    topic: "Attributes",
    question: "What are Global Attributes in HTML?",
    answer:
      "Global attributes are attributes that can be used on any HTML element. Common examples include class, id, style, title, lang, and data-*.",
  },
  {
    id: "h-attr-2",
    category: "HTML",
    topic: "Attributes",
    question: 'What is the "alt" attribute used for?',
    answer:
      "The alt attribute provides an alternative text for an image if the image cannot be displayed. It is crucial for accessibility (screen readers) and SEO.",
  },
  {
    id: "h-attr-3",
    category: "HTML",
    topic: "Attributes",
    question: 'What are "data-*" attributes?',
    answer:
      "Custom data attributes allow you to store extra information on standard, semantic HTML elements without other hacks like non-standard attributes.",
  },
  {
    id: "h-attr-4",
    category: "HTML",
    topic: "Attributes",
    question: 'Difference between "id" and "class"?',
    answer:
      "The id attribute is unique to a single element on a page, primarily used for targeting with JS or anchors. The class attribute can be used on multiple elements for shared styling.",
  },
  {
    id: "h-attr-5",
    category: "HTML",
    topic: "Attributes",
    question: 'What does the "hidden" attribute do?',
    answer:
      "The hidden attribute is a boolean attribute. When present, it specifies that an element is not yet, or is no longer, relevant, and the browser will not render it.",
  },
  {
    id: "h-attr-6",
    category: "HTML",
    topic: "Attributes",
    question: 'What is the purpose of the "download" attribute?',
    answer:
      "Used with the <a> tag, it prompts the user to download the linked resource rather than navigating to it.",
  },
  {
    id: "h-attr-7",
    category: "HTML",
    topic: "Attributes",
    question: 'Explain the "tabindex" attribute.',
    answer:
      'It specifies the tab order of an element. tabindex="0" makes it focusable in order, while tabindex="-1" makes it focusable only via script.',
  },
  {
    id: "h-attr-8",
    category: "HTML",
    topic: "Attributes",
    question: 'What is the "contenteditable" attribute?',
    answer:
      "An attribute that specifies whether the content of an element is editable or not by the user.",
  },

  // Topic: HTML Elements (8)
  {
    id: "h-elem-1",
    category: "HTML",
    topic: "HTML Elements",
    question: "What is a Block-level element?",
    answer:
      "A block-level element always starts on a new line and takes up the full width available (e.g., <div>, <h1>, <p>, <ul>).",
  },
  {
    id: "h-elem-2",
    category: "HTML",
    topic: "HTML Elements",
    question: "What is an Inline element?",
    answer:
      "An inline element does not start on a new line and only takes up as much width as necessary (e.g., <span>, <a>, <img>, <strong>).",
  },
  {
    id: "h-elem-3",
    category: "HTML",
    topic: "HTML Elements",
    question: "What is the difference between <div> and <span>?",
    answer:
      "<div> is a block-level container used for grouping larger sections, while <span> is an inline container used for marking up part of a text or document.",
  },
  {
    id: "h-elem-4",
    category: "HTML",
    topic: "HTML Elements",
    question: "How do you create an unordered list?",
    answer:
      "Using the <ul> tag for the list and <li> tags for individual list items.",
  },
  {
    id: "h-elem-5",
    category: "HTML",
    topic: "HTML Elements",
    question: 'What is an "Empty Element" in HTML?',
    answer:
      "Empty elements are elements with no content and no closing tag, like <br>, <hr>, <img>, and <input>.",
  },
  {
    id: "h-elem-6",
    category: "HTML",
    topic: "HTML Elements",
    question: "What is the <iframe> tag used for?",
    answer:
      "The <iframe> tag is used to embed another document within the current HTML document, such as a YouTube video or a map.",
  },
  {
    id: "h-elem-7",
    category: "HTML",
    topic: "HTML Elements",
    question: "How do you create a hyperlink?",
    answer:
      "Using the anchor tag <a> with the href attribute specifying the destination URL.",
  },
  {
    id: "h-elem-8",
    category: "HTML",
    topic: "HTML Elements",
    question: "What is the <table> structure?",
    answer:
      "A table consists of <table> as the container, <tr> for rows, <th> for headers, and <td> for data cells.",
  },

  // Topic: Forms and Inputs (8)
  {
    id: "h-form-1",
    category: "HTML",
    topic: "Forms and Inputs",
    question: "What is the purpose of the <label> tag?",
    answer:
      "The <label> tag defines a label for several form elements. It provides usability for mouse users (clicking the label focuses the input) and accessibility for screen readers.",
  },
  {
    id: "h-form-2",
    category: "HTML",
    topic: "Forms and Inputs",
    question: "What are the different types of <input>?",
    answer:
      "Common types include text, password, submit, radio, checkbox, button, number, date, email, and range.",
  },
  {
    id: "h-form-3",
    category: "HTML",
    topic: "Forms and Inputs",
    question: 'What does the "placeholder" attribute do?',
    answer:
      "It specifies a short hint that describes the expected value of an input field, visible before the user enters a value.",
  },
  {
    id: "h-form-4",
    category: "HTML",
    topic: "Forms and Inputs",
    question: 'Explain the "required" attribute.',
    answer:
      "A boolean attribute that specifies that an input field must be filled out before submitting the form.",
  },
  {
    id: "h-form-5",
    category: "HTML",
    topic: "Forms and Inputs",
    question: "What is the difference between GET and POST in forms?",
    answer:
      "GET appends data to the URL (visible, limited size), while POST sends data in the request body (private, large capacity).",
  },
  {
    id: "h-form-6",
    category: "HTML",
    topic: "Forms and Inputs",
    question: "What is a <fieldset>?",
    answer:
      "The <fieldset> tag is used to group related elements in a form, often with a <legend> as a caption.",
  },
  {
    id: "h-form-7",
    category: "HTML",
    topic: "Forms and Inputs",
    question: "How do you handle multiple choice in forms?",
    answer:
      'Using <select> with multiple <option> elements, or a series of <input type="checkbox"> elements.',
  },
  {
    id: "h-form-8",
    category: "HTML",
    topic: "Forms and Inputs",
    question: 'What is the "value" attribute in an input?',
    answer:
      "It specifies the initial value or the current content of an input element.",
  },

  // Topic: Media (8)
  {
    id: "h-med-1",
    category: "HTML",
    topic: "Media",
    question: "How do you embed a video?",
    answer:
      "Using the <video> tag, often with <source> children to provide different formats for browser compatibility.",
  },
  {
    id: "h-med-2",
    category: "HTML",
    topic: "Media",
    question: "What is the <audio> tag?",
    answer:
      "Used to embed sound content in a document. It supports formats like MP3, WAV, and OGG.",
  },
  {
    id: "h-med-3",
    category: "HTML",
    topic: "Media",
    question: 'What is the "autoplay" attribute?',
    answer:
      "A boolean attribute that causes the media to start playing as soon as it is ready, without user interaction.",
  },
  {
    id: "h-med-4",
    category: "HTML",
    topic: "Media",
    question: "What is the <canvas> element?",
    answer:
      "Used to draw graphics on the fly via JavaScript. It is essentially a resolution-dependent bitmap canvas.",
  },
  {
    id: "h-med-5",
    category: "HTML",
    topic: "Media",
    question: "Difference between SVG and Canvas?",
    answer:
      "SVG is vector-based (scalable, part of the DOM), while Canvas is raster-based (drawn pixel by pixel, not part of the DOM after drawing).",
  },
  {
    id: "h-med-6",
    category: "HTML",
    topic: "Media",
    question: "What is the <source> tag?",
    answer:
      "Used inside <video> or <audio> to specify multiple media resources for the browser to choose from.",
  },
  {
    id: "h-med-7",
    category: "HTML",
    topic: "Media",
    question: 'What are "controls" in HTML media?',
    answer:
      "An attribute that adds browser-default playback controls (play, pause, volume) to video or audio elements.",
  },
  {
    id: "h-med-8",
    category: "HTML",
    topic: "Media",
    question: "Explain the <track> tag.",
    answer:
      "Used to specify timed text tracks (like subtitles or captions) for media elements like <video>.",
  },

  // ==========================================
  // PART 2: CSS (30 QUESTIONS)
  // ==========================================

  // Topic: Selectors (6)
  {
    id: "c-sel-1",
    category: "CSS",
    topic: "Selectors",
    question: "What is a Class Selector?",
    answer:
      "A selector that targets elements with a specific class attribute, prefixed with a dot (.) in CSS.",
  },
  {
    id: "c-sel-2",
    category: "CSS",
    topic: "Selectors",
    question: "What is an ID Selector?",
    answer:
      "A selector that targets a unique element with a specific ID, prefixed with a hash (#) in CSS.",
  },
  {
    id: "c-sel-3",
    category: "CSS",
    topic: "Selectors",
    question: "What are Pseudo-classes?",
    answer:
      "Keywords added to selectors that specify a special state of the elements, like :hover, :active, or :focus.",
  },
  {
    id: "c-sel-4",
    category: "CSS",
    topic: "Selectors",
    question: "Explain Pseudo-elements.",
    answer:
      "Keywords added to selectors that let you style a specific part of an element, like ::before, ::after, or ::first-line.",
  },
  {
    id: "c-sel-5",
    category: "CSS",
    topic: "Selectors",
    question: "What is the Universal Selector?",
    answer:
      "Targeted with the asterisk (*), it matches every element on the page.",
  },
  {
    id: "c-sel-6",
    category: "CSS",
    topic: "Selectors",
    question: "What is an Attribute Selector?",
    answer:
      'Allows you to select elements based on the presence or value of a specific attribute, e.g., input[type="text"].',
  },

  // Topic: Box Model (6)
  {
    id: "c-box-1",
    category: "CSS",
    topic: "Box Model",
    question: "Components of the CSS Box Model?",
    answer: "Content, Padding, Border, and Margin.",
  },
  {
    id: "c-box-2",
    category: "CSS",
    topic: "Box Model",
    question: "Difference between padding and margin?",
    answer:
      "Padding is space inside the element (around the content), while Margin is space outside the element (around the border).",
  },
  {
    id: "c-box-3",
    category: "CSS",
    topic: "Box Model",
    question: "What does box-sizing: border-box do?",
    answer:
      "It tells the browser to include padding and border in the element's total width and height, making layout sizing more intuitive.",
  },
  {
    id: "c-box-4",
    category: "CSS",
    topic: "Box Model",
    question: 'What is "Content Box"?',
    answer:
      "The default box-sizing where width and height apply only to the content, and padding/borders are added outside.",
  },
  {
    id: "c-box-5",
    category: "CSS",
    topic: "Box Model",
    question: "Can margins be negative?",
    answer:
      "Yes, negative margins can be used to overlap elements or pull them in a specific direction.",
  },
  {
    id: "c-box-6",
    category: "CSS",
    topic: "Box Model",
    question: "What is Margin Collapsing?",
    answer:
      "When vertical margins of adjacent blocks are combined into a single margin that is the larger of the two.",
  },

  // Topic: Positioning and Layout (6)
  {
    id: "c-pos-1",
    category: "CSS",
    topic: "Positioning and Layout",
    question: "Difference between Absolute and Relative positioning?",
    answer:
      "Relative stays in the normal document flow and is offset from itself. Absolute is removed from flow and positioned relative to its closest positioned ancestor.",
  },
  {
    id: "c-pos-2",
    category: "CSS",
    topic: "Positioning and Layout",
    question: "What is Flexbox?",
    answer:
      "A 1D layout model that provides space distribution and powerful alignment capabilities.",
  },
  {
    id: "c-pos-3",
    category: "CSS",
    topic: "Positioning and Layout",
    question: "What is CSS Grid?",
    answer:
      "A 2D layout system for the web, allowing you to create complex layouts with rows and columns.",
  },
  {
    id: "c-pos-4",
    category: "CSS",
    topic: "Positioning and Layout",
    question: 'Explain "Fixed" positioning.',
    answer:
      "The element is removed from normal flow and positioned relative to the browser window (viewport), staying put even when scrolling.",
  },
  {
    id: "c-pos-5",
    category: "CSS",
    topic: "Positioning and Layout",
    question: 'What is "Sticky" positioning?',
    answer:
      'A hybrid of relative and fixed. It acts like relative until a scroll threshold is met, then it "sticks" like fixed.',
  },
  {
    id: "c-pos-6",
    category: "CSS",
    topic: "Positioning and Layout",
    question: "What does z-index do?",
    answer:
      "It controls the stacking order of overlapping elements. Only works on positioned elements.",
  },

  // Topic: Responsive Design (6)
  {
    id: "c-res-1",
    category: "CSS",
    topic: "Responsive Design",
    question: "What is a Media Query?",
    answer:
      "A rule used to apply CSS styles only if a certain condition is true, such as a specific screen width.",
  },
  {
    id: "c-res-2",
    category: "CSS",
    topic: "Responsive Design",
    question: "Difference between px, em, and rem?",
    answer:
      "px is absolute. em is relative to parent font size. rem is relative to the root (html) font size.",
  },
  {
    id: "c-res-3",
    category: "CSS",
    topic: "Responsive Design",
    question: "What is Mobile-First design?",
    answer:
      "An approach where you design the mobile version first and then use media queries to add styles for larger screens.",
  },
  {
    id: "c-res-4",
    category: "CSS",
    topic: "Responsive Design",
    question: "What are Viewport Units (vw/vh)?",
    answer:
      "Units relative to the size of the viewport. 1vw is 1% of the viewport width.",
  },
  {
    id: "c-res-5",
    category: "CSS",
    topic: "Responsive Design",
    question: "How do you make an image responsive?",
    answer: "By setting max-width: 100%; and height: auto;.",
  },
  {
    id: "c-res-6",
    category: "CSS",
    topic: "Responsive Design",
    question: 'What is the "viewport" meta tag?',
    answer:
      "A tag in HTML that tells the browser how to control the page's dimensions and scaling on different devices.",
  },

  // Topic: Styling (6)
  {
    id: "c-sty-1",
    category: "CSS",
    topic: "Styling",
    question: "How do you apply a Google Font?",
    answer:
      "By linking it in the <head> of the HTML or using @import in CSS, then specifying it in the font-family property.",
  },
  {
    id: "c-sty-2",
    category: "CSS",
    topic: "Styling",
    question: "Difference between Opacity and RGBA?",
    answer:
      "Opacity affects the whole element and its children. RGBA (alpha) only affects the specific color (e.g., background) without affecting children.",
  },
  {
    id: "c-sty-3",
    category: "CSS",
    topic: "Styling",
    question: "What are CSS Transitions?",
    answer:
      "Allows you to change property values smoothly over a given duration.",
  },
  {
    id: "c-sty-4",
    category: "CSS",
    topic: "Styling",
    question: "What is a Linear Gradient?",
    answer:
      "A smooth transition between two or more colors along a straight line.",
  },
  {
    id: "c-sty-5",
    category: "CSS",
    topic: "Styling",
    question: "How do you add a Box Shadow?",
    answer:
      "Using the box-shadow property specifying horizontal/vertical offset, blur, spread, and color.",
  },
  {
    id: "c-sty-6",
    category: "CSS",
    topic: "Styling",
    question: "What are CSS Variables?",
    answer:
      "Custom properties that allow you to store values (like colors or sizes) for reuse throughout the stylesheet, defined as --variable-name.",
  },

  // ==========================================
  // PART 3: JAVASCRIPT (50 QUESTIONS)
  // ==========================================

  // Topic: DOM Manipulation (10)
  {
    id: "j-dom-1",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "What is the DOM?",
    answer:
      "The Document Object Model is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.",
  },
  {
    id: "j-dom-2",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "How to select an element by ID?",
    answer: 'document.getElementById("myID")',
  },
  {
    id: "j-dom-3",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "Difference between querySelector and getElementById?",
    answer:
      "getElementById is faster and targets IDs. querySelector is more flexible, allowing any CSS selector.",
  },
  {
    id: "j-dom-4",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "How do you add an Event Listener?",
    answer: 'element.addEventListener("click", function) is the standard way.',
  },
  {
    id: "j-dom-5",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "How to change the text content of an element?",
    answer: "Using the textContent property or innerText property.",
  },
  {
    id: "j-dom-6",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "What is innerHTML?",
    answer:
      "A property that allows you to get or set the HTML markup contained within an element.",
  },
  {
    id: "j-dom-7",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "How to create a new element?",
    answer: 'document.createElement("tagName")',
  },
  {
    id: "j-dom-8",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "How to add a class to an element?",
    answer: 'element.classList.add("className")',
  },
  {
    id: "j-dom-9",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "What is Event Delegation?",
    answer:
      "A pattern where you attach a single event listener to a parent element to manage events for all of its children, using event bubbling.",
  },
  {
    id: "j-dom-10",
    category: "JavaScript",
    topic: "DOM Manipulation",
    question: "Difference between parentNode and parentElement?",
    answer:
      "Both return the parent. parentNode can return any node, while parentElement returns null if the parent is not an element node.",
  },

  // Topic: Control Flow (10)
  {
    id: "j-cf-1",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'What is an "if" statement?',
    answer:
      "Used to specify a block of code to be executed if a condition is true.",
  },
  {
    id: "j-cf-2",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'How does a "switch" statement work?',
    answer:
      'Evaluates an expression and matches it against multiple "case" labels to execute specific blocks of code.',
  },
  {
    id: "j-cf-3",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'What is a "for" loop?',
    answer:
      "Repeats a block of code as long as a condition remains true, usually with a counter.",
  },
  {
    id: "j-cf-4",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'Explain "while" vs "do while".',
    answer:
      "while checks the condition first. do while executes the block once before checking the condition.",
  },
  {
    id: "j-cf-5",
    category: "JavaScript",
    topic: "Control Flow",
    question: "What is the Ternary Operator?",
    answer: "A shorthand for if-else: condition ? trueResult : falseResult.",
  },
  {
    id: "j-cf-6",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'What is the purpose of "break"?',
    answer: "Used to jump out of a loop or switch statement immediately.",
  },
  {
    id: "j-cf-7",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'What is "continue"?',
    answer: "Skips the current iteration of a loop and moves to the next one.",
  },
  {
    id: "j-cf-8",
    category: "JavaScript",
    topic: "Control Flow",
    question: "What are Logical Operators?",
    answer:
      "&& (AND), || (OR), and ! (NOT) used to determine logic between variables.",
  },
  {
    id: "j-cf-9",
    category: "JavaScript",
    topic: "Control Flow",
    question: "What is the Nullish Coalescing operator (??)?",
    answer:
      "Returns the right-hand operand when the left-hand is null or undefined, unlike || which checks for any falsy value.",
  },
  {
    id: "j-cf-10",
    category: "JavaScript",
    topic: "Control Flow",
    question: 'Explain "truthy" and "falsy" values.',
    answer:
      'Values that evaluate to true or false in boolean contexts. Falsy values are false, 0, "", null, undefined, and NaN.',
  },

  // Topic: ES6 Features (15)
  {
    id: "j-es6-1",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "Difference between let and const?",
    answer:
      "let allows reassignment. const is for constants and cannot be reassigned after declaration.",
  },
  {
    id: "j-es6-2",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What are Arrow Functions?",
    answer:
      'A concise syntax for writing functions: () => {}. They do not have their own "this" context.',
  },
  {
    id: "j-es6-3",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What are Template Literals?",
    answer:
      "Strings enclosed in backticks (`) that allow embedded expressions using ${}.",
  },
  {
    id: "j-es6-4",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What is Destructuring?",
    answer:
      "A way to unpack values from arrays or properties from objects into distinct variables.",
  },
  {
    id: "j-es6-5",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What is the Spread Operator (...)?",
    answer:
      "Used to expand an iterable (like an array) into individual elements.",
  },
  {
    id: "j-es6-6",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What is the Rest Parameter?",
    answer:
      "Used in function arguments to collect multiple elements into a single array.",
  },
  {
    id: "j-es6-7",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What are ES6 Classes?",
    answer:
      "A syntactical sugar over prototypes to create objects and handle inheritance.",
  },
  {
    id: "j-es6-8",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What are Modules in ES6?",
    answer:
      "Using import and export to share code between different JavaScript files.",
  },
  {
    id: "j-es6-9",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What is a Promise?",
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation.",
  },
  {
    id: "j-es6-10",
    category: "JavaScript",
    topic: "ES6 Features",
    question: 'What is "map()" in ES6?',
    answer:
      "An array method that creates a new array by calling a function for every array element.",
  },
  {
    id: "j-es6-11",
    category: "JavaScript",
    topic: "ES6 Features",
    question: 'What is "filter()"?',
    answer:
      "Creates a new array with all elements that pass the test implemented by the provided function.",
  },
  {
    id: "j-es6-12",
    category: "JavaScript",
    topic: "ES6 Features",
    question: 'What is "find()"?',
    answer:
      "Returns the value of the first element in the array that satisfies the provided testing function.",
  },
  {
    id: "j-es6-13",
    category: "JavaScript",
    topic: "ES6 Features",
    question: 'What is "reduce()"?',
    answer:
      "Executes a reducer function on each element, resulting in a single output value.",
  },
  {
    id: "j-es6-14",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "Explain Default Parameters.",
    answer:
      "Allow named parameters to be initialized with default values if no value or undefined is passed.",
  },
  {
    id: "j-es6-15",
    category: "JavaScript",
    topic: "ES6 Features",
    question: "What is Object Property Shorthand?",
    answer:
      "If the property name and variable name match, you can just write the name: const obj = { name }; instead of { name: name };.",
  },

  // Topic: APIs (15)
  {
    id: "j-api-1",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the Fetch API?",
    answer:
      "A modern, promise-based interface for making asynchronous HTTP requests in the browser.",
  },
  {
    id: "j-api-2",
    category: "JavaScript",
    topic: "APIs",
    question: "What is LocalStorage?",
    answer:
      "A web storage API that allows you to store key-value pairs in the browser with no expiration date.",
  },
  {
    id: "j-api-3",
    category: "JavaScript",
    topic: "APIs",
    question: "What is SessionStorage?",
    answer:
      "Similar to LocalStorage but data is cleared when the page session ends (tab is closed).",
  },
  {
    id: "j-api-4",
    category: "JavaScript",
    topic: "APIs",
    question: "What is JSON?",
    answer:
      "JavaScript Object Notation, a lightweight data-interchange format easily readable by humans and machines.",
  },
  {
    id: "j-api-5",
    category: "JavaScript",
    topic: "APIs",
    question: "How do you handle a Fetch error?",
    answer:
      "Using .catch() for network errors, but you must manually check res.ok for HTTP errors like 404.",
  },
  {
    id: "j-api-6",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the Geolocation API?",
    answer: "Allows the user to provide their location to web applications.",
  },
  {
    id: "j-api-7",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the History API?",
    answer:
      "Allows manipulation of the browser session history, useful for Single Page Applications (SPAs).",
  },
  {
    id: "j-api-8",
    category: "JavaScript",
    topic: "APIs",
    question: 'Explain "async/await".',
    answer:
      "Syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code.",
  },
  {
    id: "j-api-9",
    category: "JavaScript",
    topic: "APIs",
    question: "What is a Web Worker?",
    answer:
      "A script that runs in the background, separate from the main execution thread, allowing for heavy computations without freezing the UI.",
  },
  {
    id: "j-api-10",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the Clipboard API?",
    answer:
      "Provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.",
  },
  {
    id: "j-api-11",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the Intersection Observer API?",
    answer:
      "Provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or the viewport.",
  },
  {
    id: "j-api-12",
    category: "JavaScript",
    topic: "APIs",
    question: "How do you convert an object to a JSON string?",
    answer: "JSON.stringify(object)",
  },
  {
    id: "j-api-13",
    category: "JavaScript",
    topic: "APIs",
    question: "How do you parse a JSON string?",
    answer: "JSON.parse(string)",
  },
  {
    id: "j-api-14",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the URLSearchParams API?",
    answer: "Provides a way to easily work with the query string of a URL.",
  },
  {
    id: "j-api-15",
    category: "JavaScript",
    topic: "APIs",
    question: "What is the File API?",
    answer:
      "Provides a way to access file information and read file content in the browser (e.g., using FileReader).",
  },
  // PART 1: REACT JS (30 Questions)
  // React Lifecycle (6)
  {
    id: "r-lc-1",
    category: "React JS",
    topic: "React Lifecycle",
    question: "What is the React component lifecycle?",
    answer:
      "The lifecycle refers to the series of events that happen from the birth of a React component to its death. In class components, it consists of three main phases: Mounting (creation), Updating (re-rendering), and Unmounting (removal).",
  },
  {
    id: "r-lc-2",
    category: "React JS",
    topic: "React Lifecycle",
    question: "How do Hooks replicate lifecycle methods?",
    answer:
      "The useEffect hook serves as a primary way to handle lifecycle events. An empty dependency array [] acts like componentDidMount, returning a function inside useEffect acts as componentWillUnmount, and adding state/props to the array acts as componentDidUpdate.",
  },
  {
    id: "r-lc-3",
    category: "React JS",
    topic: "React Lifecycle",
    question: "What is the purpose of shouldComponentUpdate?",
    answer:
      "It is a lifecycle method used for performance optimization. It allows you to prevent unnecessary re-renders by returning false if the state or props haven't changed in a way that requires a UI update.",
  },
  {
    id: "r-lc-4",
    category: "React JS",
    topic: "React Lifecycle",
    question: 'What happens during the "Render" phase vs "Commit" phase?',
    answer:
      "The Render phase is pure and has no side effects; React determines what changes need to be made. The Commit phase is where React actually applies changes to the DOM and where lifecycle methods like componentDidMount or useEffect are executed.",
  },
  {
    id: "r-lc-5",
    category: "React JS",
    topic: "React Lifecycle",
    question: "Explain the getDerivedStateFromProps method.",
    answer:
      "It is a static lifecycle method called right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.",
  },
  {
    id: "r-lc-6",
    category: "React JS",
    topic: "React Lifecycle",
    question: "When would you use useLayoutEffect instead of useEffect?",
    answer:
      "Use useLayoutEffect when you need to perform measurements or DOM manipulations that must happen synchronously before the browser repaints the screen, preventing visual flickers.",
  },

  // Routing (6)
  {
    id: "r-rt-1",
    category: "React JS",
    topic: "Routing",
    question: "What is the difference between Link and a tags in React Router?",
    answer:
      "The <Link> component prevents a full page reload, enabling SPA behavior. An <a> tag causes a full browser refresh, losing application state.",
  },
  {
    id: "r-rt-2",
    category: "React JS",
    topic: "Routing",
    question: "How do you handle dynamic routing and parameters?",
    answer:
      "Dynamic routes are defined using colons, e.g., /user/:id. You can access these parameters in your component using the useParams() hook from React Router.",
  },
  {
    id: "r-rt-3",
    category: "React JS",
    topic: "Routing",
    question: "What is the role of the useNavigate hook?",
    answer:
      "useNavigate provides a programmatic way to navigate between routes, replacing the older useHistory. It can navigate to specific paths or move forward/backward in history.",
  },
  {
    id: "r-rt-4",
    category: "React JS",
    topic: "Routing",
    question: "What are Nested Routes?",
    answer:
      "Nested routes allow you to render sub-components within a parent route by using the <Outlet /> component, which specifies where child components should be rendered.",
  },
  {
    id: "r-rt-5",
    category: "React JS",
    topic: "Routing",
    question: "How do you create a Protected Route?",
    answer:
      "By wrapping a Route component with a higher-order component or a conditional check that validates the user's authentication status before rendering the target component or redirecting to login.",
  },
  {
    id: "r-rt-6",
    category: "React JS",
    topic: "Routing",
    question: "What is the purpose of HashRouter vs BrowserRouter?",
    answer:
      "BrowserRouter uses the HTML5 History API for clean URLs, while HashRouter uses the URL hash (#) to keep UI synced with the URL, often used for static hosting or legacy browser support.",
  },

  // State Management (6)
  {
    id: "r-sm-1",
    category: "React JS",
    topic: "State Management",
    question: 'What is "Prop Drilling"?',
    answer:
      "Prop drilling is the process of passing data from a parent component down through multiple levels of child components just to reach a deeply nested component that actually needs the data.",
  },
  {
    id: "r-sm-2",
    category: "React JS",
    topic: "State Management",
    question: "How does Context API work?",
    answer:
      "Context API allows sharing state globally across the component tree without prop drilling. It consists of a React.createContext(), a Provider to hold the data, and a Consumer (or useContext hook) to access it.",
  },
  {
    id: "r-sm-3",
    category: "React JS",
    topic: "State Management",
    question: "When should you use useReducer instead of useState?",
    answer:
      "useReducer is preferred for complex state logic involving multiple sub-values or when the next state depends on the previous one, similar to how Redux works.",
  },
  {
    id: "r-sm-4",
    category: "React JS",
    topic: "State Management",
    question: "What is the benefit of using Redux in a large application?",
    answer:
      "Redux provides a predictable state container, centralized data management, powerful debugging tools (Time Travel), and makes it easier to track when and why state changed.",
  },
  {
    id: "r-sm-5",
    category: "React JS",
    topic: "State Management",
    question: 'What does "Lifting State Up" mean?',
    answer:
      "It is the practice of moving shared state to the closest common ancestor of the components that need it, ensuring a single source of truth.",
  },
  {
    id: "r-sm-6",
    category: "React JS",
    topic: "State Management",
    question: "What are controlled vs uncontrolled components?",
    answer:
      "Controlled components have their form data handled by React state. Uncontrolled components store their data in the DOM and are accessed using refs.",
  },

  // Forms in React (6)
  {
    id: "r-fr-1",
    category: "React JS",
    topic: "Forms in React",
    question: "How do you handle form submission in React?",
    answer:
      "By attaching an onSubmit handler to the form element and calling e.preventDefault() to stop the default browser reload before processing the data with state or APIs.",
  },
  {
    id: "r-fr-2",
    category: "React JS",
    topic: "Forms in React",
    question:
      "How do you handle multiple input fields with a single change handler?",
    answer:
      'By using the "name" attribute of inputs and a functional state update: setState({...state, [e.target.name]: e.target.value}).',
  },
  {
    id: "r-fr-3",
    category: "React JS",
    topic: "Forms in React",
    question: "What is the use case for useRef in forms?",
    answer:
      "useRef is used for Uncontrolled Components where you need direct access to a DOM node (e.g., focusing an input or reading its value on demand) without triggering re-renders.",
  },
  {
    id: "r-fr-4",
    category: "React JS",
    topic: "Forms in React",
    question: "How do you implement client-side validation?",
    answer:
      "Validation is usually done inside the onChange handler or just before onSubmit by checking state values against regex or constraints and displaying error messages conditionally.",
  },
  {
    id: "r-fr-5",
    category: "React JS",
    topic: "Forms in React",
    question:
      "What are the advantages of libraries like Formik or React Hook Form?",
    answer:
      "They simplify form state management, reduce boilerplate code, provide built-in validation support, and optimize performance by reducing re-renders during typing.",
  },
  {
    id: "r-fr-6",
    category: "React JS",
    topic: "Forms in React",
    question: "How do you handle checkboxes and radio buttons differently?",
    answer:
      'Checkboxes use the "checked" property in state rather than "value", and radio buttons are handled by checking if their value matches the specific selected value in state.',
  },

  // React Authentication (6)
  {
    id: "r-au-1",
    category: "React JS",
    topic: "React authentication",
    question: "Where should you store JWT tokens in a React app?",
    answer:
      "For better security against XSS, tokens are ideally stored in HttpOnly cookies. If stored client-side, localStorage or sessionStorage are common but less secure options.",
  },
  {
    id: "r-au-2",
    category: "React JS",
    topic: "React authentication",
    question: "How do you persist login state after a page refresh?",
    answer:
      "By checking for a stored token or valid session in a useEffect hook at the root of the app (App.js) and updating the AuthContext accordingly.",
  },
  {
    id: "r-au-3",
    category: "React JS",
    topic: "React authentication",
    question: "What is the role of an Auth Provider?",
    answer:
      "An Auth Provider is a Context Provider that wraps the entire app, providing user profile data, login/logout functions, and authentication status to any component that needs it.",
  },
  {
    id: "r-au-4",
    category: "React JS",
    topic: "React authentication",
    question: "How do you handle expired tokens?",
    answer:
      "By using axios interceptors to catch 401 errors and either redirecting the user to login or attempting to refresh the token using a refresh token endpoint.",
  },
  {
    id: "r-au-5",
    category: "React JS",
    topic: "React authentication",
    question: "What is OAuth in React?",
    answer:
      "OAuth is an open standard for access delegation, allowing users to log in via third-party services like Google or GitHub without sharing their passwords with your app.",
  },
  {
    id: "r-au-6",
    category: "React JS",
    topic: "React authentication",
    question: "How do you implement a Sign-Out function?",
    answer:
      "The sign-out function should clear the auth state in React, remove tokens from storage (localStorage/cookies), and navigate the user back to the home or login page.",
  },

  // PART 2: MONGODB (20 Questions)
  // CRUD Operations (5)
  {
    id: "m-cr-1",
    category: "MongoDB",
    topic: "CRUD Operations",
    question: "What is the command for inserting multiple documents?",
    answer: "db.collection.insertMany([doc1, doc2, ...])",
  },
  {
    id: "m-cr-2",
    category: "MongoDB",
    topic: "CRUD Operations",
    question: "Difference between updateOne and replaceOne?",
    answer:
      "updateOne modifies specific fields in a document using $set, while replaceOne replaces the entire document with a new one (except for the _id).",
  },
  {
    id: "m-cr-3",
    category: "MongoDB",
    topic: "CRUD Operations",
    question: 'How do you perform a "soft delete" in MongoDB?',
    answer:
      'Instead of db.collection.deleteOne(), you use updateOne() to set a flag like "isDeleted: true" or "deletedAt: new Date()".',
  },
  {
    id: "m-cr-4",
    category: "MongoDB",
    topic: "CRUD Operations",
    question: 'What is the "upsert" option?',
    answer:
      "Upsert (Update + Insert) is an option that tells MongoDB to update a document if it matches the filter, or create a new one if no match is found.",
  },
  {
    id: "m-cr-5",
    category: "MongoDB",
    topic: "CRUD Operations",
    question: "How can you retrieve only specific fields from a document?",
    answer:
      'Using "Projection". Example: db.collection.find({}, { name: 1, email: 1, _id: 0 })',
  },

  // Querying (5)
  {
    id: "m-qy-1",
    category: "MongoDB",
    topic: "Querying",
    question: 'How do you query with an "OR" condition?',
    answer:
      'By using the $or operator: db.collection.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })',
  },
  {
    id: "m-qy-2",
    category: "MongoDB",
    topic: "Querying",
    question: "What is the Aggregation Framework?",
    answer:
      "It is a multi-stage pipeline used to process data (filter, group, sort, transform) and return computed results, similar to SQL GROUP BY.",
  },
  {
    id: "m-qy-3",
    category: "MongoDB",
    topic: "Querying",
    question: "How do you perform a Join in MongoDB?",
    answer:
      "Since MongoDB is non-relational, you use the $lookup aggregation stage to perform left outer joins between collections.",
  },
  {
    id: "m-qy-4",
    category: "MongoDB",
    topic: "Querying",
    question: "What does the $match operator do in a pipeline?",
    answer:
      "$match filters the documents to pass only those that match the specified condition(s) to the next pipeline stage.",
  },
  {
    id: "m-qy-5",
    category: "MongoDB",
    topic: "Querying",
    question: "How do you query for nested array elements?",
    answer:
      "By using the dot notation for specific indexes or the $elemMatch operator to match multiple criteria in a single array element.",
  },

  // Integration with Node.js (5)
  {
    id: "m-in-1",
    category: "MongoDB",
    topic: "Integration with Node.js",
    question: "What is Mongoose?",
    answer:
      "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js that provides schema validation, middleware, and a more structured way to interact with the database.",
  },
  {
    id: "m-in-2",
    category: "MongoDB",
    topic: "Integration with Node.js",
    question: "How do you connect to a MongoDB database using Mongoose?",
    answer:
      'mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true })',
  },
  {
    id: "m-in-3",
    category: "MongoDB",
    topic: "Integration with Node.js",
    question: "What is a Mongoose Schema?",
    answer:
      "A Schema defines the structure of the document, default values, validators, etc., which is then used to create a Model.",
  },
  {
    id: "m-in-4",
    category: "MongoDB",
    topic: "Integration with Node.js",
    question: "How do you handle asynchronous operations in Mongoose?",
    answer:
      "Mongoose operations return Promises, so you can use .then() / .catch() or more modernly, async/await with try/catch blocks.",
  },
  {
    id: "m-in-5",
    category: "MongoDB",
    topic: "Integration with Node.js",
    question: "What are Mongoose Middlewares (Hooks)?",
    answer:
      'Hooks are functions which are passed control during execution of asynchronous functions. Examples include "pre" and "post" hooks for saving or deleting documents.',
  },

  // Indexing (5)
  {
    id: "m-ix-1",
    category: "MongoDB",
    topic: "Indexing in MongoDB",
    question: "What is an Index in MongoDB?",
    answer:
      "Indexes are special data structures that store a small portion of the collection's data set in a form that is easy to traverse, significantly improving query performance.",
  },
  {
    id: "m-ix-2",
    category: "MongoDB",
    topic: "Indexing in MongoDB",
    question: "What is a Compound Index?",
    answer:
      "An index that contains references to multiple fields within a document, allowing queries that filter on multiple fields to be much faster.",
  },
  {
    id: "m-ix-3",
    category: "MongoDB",
    topic: "Indexing in MongoDB",
    question: "How do you view the performance of a query?",
    answer:
      'By appending .explain("executionStats") to the end of your query to see how many documents were scanned vs returned.',
  },
  {
    id: "m-ix-4",
    category: "MongoDB",
    topic: "Indexing in MongoDB",
    question: "What is a TTL Index?",
    answer:
      'A "Time To Live" index is a special index that automatically removes documents from a collection after a certain amount of time, useful for logs or session data.',
  },
  {
    id: "m-ix-5",
    category: "MongoDB",
    topic: "Indexing in MongoDB",
    question: "Can too many indexes hurt performance?",
    answer:
      "Yes. While indexes speed up reads, they slow down write operations (insert, update, delete) because the index must be updated every time the data changes.",
  },

  // PART 3: NODE JS (20 Questions)
  // Basic Server (5)
  {
    id: "n-bs-1",
    category: "Node JS",
    topic: "Basic Server",
    question: "How do you create a basic HTTP server in Node.js?",
    answer:
      'Using the "http" module: http.createServer((req, res) => { res.end("Hello"); }).listen(3000);',
  },
  {
    id: "n-bs-2",
    category: "Node JS",
    topic: "Basic Server",
    question: "What is the role of package.json?",
    answer:
      "It is a manifest file that contains metadata about the project, scripts for running/testing, and a list of dependencies required for the app.",
  },
  {
    id: "n-bs-3",
    category: "Node JS",
    topic: "Basic Server",
    question: "Difference between require() and import?",
    answer:
      "require() is CommonJS (synchronous, older), while import is ESM (ECMAScript Modules, asynchronous, modern standard).",
  },
  {
    id: "n-bs-4",
    category: "Node JS",
    topic: "Basic Server",
    question: "What is the purpose of process.env?",
    answer:
      "It is a global object that provides access to environment variables, used to store sensitive data like API keys and database URLs.",
  },
  {
    id: "n-bs-5",
    category: "Node JS",
    topic: "Basic Server",
    question: "What is the REPL in Node.js?",
    answer:
      "Read-Eval-Print Loop. It is an interactive shell for executing JavaScript code in the Node environment, similar to the browser console.",
  },

  // File System (5)
  {
    id: "n-fs-1",
    category: "Node JS",
    topic: "File System",
    question: "How do you read a file synchronously vs asynchronously?",
    answer:
      "fs.readFileSync() blocks the thread until completion, while fs.readFile() takes a callback and is non-blocking.",
  },
  {
    id: "n-fs-2",
    category: "Node JS",
    topic: "File System",
    question: "What are Streams in Node.js?",
    answer:
      "Streams allow reading or writing data chunk by chunk without loading the entire file into memory, which is efficient for large files.",
  },
  {
    id: "n-fs-3",
    category: "Node JS",
    topic: "File System",
    question: "Difference between fs.writeFile and fs.appendFile?",
    answer:
      "writeFile overwrites the entire file content, while appendFile adds data to the end of the existing content.",
  },
  {
    id: "n-fs-4",
    category: "Node JS",
    topic: "File System",
    question: "How do you delete a file using the fs module?",
    answer:
      "Using fs.unlink() (asynchronous) or fs.unlinkSync() (synchronous).",
  },
  {
    id: "n-fs-5",
    category: "Node JS",
    topic: "File System",
    question: "What is the fs.promises API?",
    answer:
      "A modern version of the fs module that returns Promises instead of using callbacks, making it easier to use with async/await.",
  },

  // Middleware (5)
  {
    id: "n-mw-1",
    category: "Node JS",
    topic: "Middleware",
    question: "What is middleware in Node.js/Express?",
    answer:
      "Middleware are functions that have access to the request (req), response (res), and the next function in the app's request-response cycle.",
  },
  {
    id: "n-mw-2",
    category: "Node JS",
    topic: "Middleware",
    question: "What is the purpose of the next() function?",
    answer:
      "It passes control to the next middleware function in the stack. If not called, the request will hang.",
  },
  {
    id: "n-mw-3",
    category: "Node JS",
    topic: "Middleware",
    question: "Give an example of built-in middleware in Express.",
    answer:
      "express.json() for parsing JSON bodies and express.static() for serving static files like images.",
  },
  {
    id: "n-mw-4",
    category: "Node JS",
    topic: "Middleware",
    question: 'What is "Error-handling middleware"?',
    answer:
      "A special type of middleware defined with 4 arguments (err, req, res, next) instead of 3, used to catch and respond to errors.",
  },
  {
    id: "n-mw-5",
    category: "Node JS",
    topic: "Middleware",
    question: "Can you use multiple middleware functions in one route?",
    answer:
      'Yes, by passing them as a sequence of arguments: app.get("/path", mid1, mid2, (req, res) => { ... })',
  },

  // Single Threaded Application (5)
  {
    id: "n-st-1",
    category: "Node JS",
    topic: "Single threaded application",
    question: "Is Node.js truly single-threaded?",
    answer:
      "Yes, the Event Loop is single-threaded. However, Node uses the libuv library to offload heavy tasks (I/O, crypto) to a background thread pool.",
  },
  {
    id: "n-st-2",
    category: "Node JS",
    topic: "Single threaded application",
    question: "How does Node.js handle multiple concurrent requests?",
    answer:
      "Through non-blocking I/O. Instead of waiting for a database to respond, Node continues to process other events in the loop and handles the result via a callback when ready.",
  },
  {
    id: "n-st-3",
    category: "Node JS",
    topic: "Single threaded application",
    question: "What is the Event Loop?",
    answer:
      "The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible.",
  },
  {
    id: "n-st-4",
    category: "Node JS",
    topic: "Single threaded application",
    question: "What happens if you block the event loop?",
    answer:
      "If a long-running CPU task (like a heavy loop) is executed on the main thread, the entire server becomes unresponsive to other incoming requests.",
  },
  {
    id: "n-st-5",
    category: "Node JS",
    topic: "Single threaded application",
    question: "What are Worker Threads?",
    answer:
      "A module that allows for executing JavaScript in parallel on separate threads, useful for CPU-intensive tasks without blocking the main event loop.",
  },

  // PART 4: EXPRESS JS (20 Questions)
  // Request and Response (5)
  {
    id: "e-rr-1",
    category: "Express JS",
    topic: "Request and Response",
    question: "How do you extract data from URL parameters?",
    answer:
      "Using req.params. Example: For route /user/:id, access it via req.params.id.",
  },
  {
    id: "e-rr-2",
    category: "Express JS",
    topic: "Request and Response",
    question: "What is the difference between res.send() and res.json()?",
    answer:
      "res.json() explicitly sends a JSON response and sets the Content-Type header to application/json, while res.send() can send various types of data.",
  },
  {
    id: "e-rr-3",
    category: "Express JS",
    topic: "Request and Response",
    question: "How do you set a status code in the response?",
    answer: 'res.status(404).send("Not Found");',
  },
  {
    id: "e-rr-4",
    category: "Express JS",
    topic: "Request and Response",
    question: "What is req.body?",
    answer:
      "An object containing the data sent in the request body (usually from a form or JSON POST), available after using a body-parsing middleware like express.json().",
  },
  {
    id: "e-rr-5",
    category: "Express JS",
    topic: "Request and Response",
    question: "How do you handle query strings?",
    answer: 'Using req.query. For /search?q=node, req.query.q will be "node".',
  },

  // Error Handling (5)
  {
    id: "e-eh-1",
    category: "Express JS",
    topic: "Error Handling",
    question: "What is the default error handler in Express?",
    answer:
      "Express comes with a built-in error handler that catches all errors and returns a 500 status code with a stack trace in development.",
  },
  {
    id: "e-eh-2",
    category: "Express JS",
    topic: "Error Handling",
    question: "How do you manually trigger the error handler?",
    answer:
      'By passing an error object to the next() function: next(new Error("Custom Error"));',
  },
  {
    id: "e-eh-3",
    category: "Express JS",
    topic: "Error Handling",
    question: "How do you create a centralized error-handling middleware?",
    answer:
      "Define a middleware at the end of the app stack with 4 params: app.use((err, req, res, next) => { ... })",
  },
  {
    id: "e-eh-4",
    category: "Express JS",
    topic: "Error Handling",
    question: "Why should you use try/catch in async route handlers?",
    answer:
      "Express doesn't automatically catch errors thrown in async functions, so you must wrap them and pass errors to next(err) manually (or use an async handler wrapper).",
  },
  {
    id: "e-eh-5",
    category: "Express JS",
    topic: "Error Handling",
    question: 'How do you handle 404 "Not Found" errors?',
    answer:
      "By placing a middleware at the very bottom of your app stack (after all routes) that responds with a 404 status.",
  },

  // Connecting with MongoDB (5)
  {
    id: "e-cm-1",
    category: "Express JS",
    topic: "Connecting with MongoDB",
    question: "What are the main steps to connect Express to MongoDB?",
    answer:
      "1. Install mongoose. 2. Define a connection string. 3. Call mongoose.connect(). 4. Create models to interact with collections.",
  },
  {
    id: "e-cm-2",
    category: "Express JS",
    topic: "Connecting with MongoDB",
    question: "Should you open a new connection for every request?",
    answer:
      "No. You should open one persistent connection when the server starts and reuse it throughout the application lifetime.",
  },
  {
    id: "e-cm-3",
    category: "Express JS",
    topic: "Connecting with MongoDB",
    question: "How do you handle database connection errors?",
    answer:
      'By using the .catch() on the connection promise or listening to events: mongoose.connection.on("error", console.error);',
  },
  {
    id: "e-cm-4",
    category: "Express JS",
    topic: "Connecting with MongoDB",
    question:
      'What is the purpose of "Environment Variables" for DB connections?',
    answer:
      "To keep sensitive credentials like the MongoDB URI out of the source code for security and to allow different DBs for dev/prod.",
  },
  {
    id: "e-cm-5",
    category: "Express JS",
    topic: "Connecting with MongoDB",
    question:
      'How do you perform a simple "Find" operation inside an Express route?',
    answer:
      'app.get("/users", async (req, res) => { const users = await User.find(); res.json(users); });',
  },

  // Scaffolding (5)
  {
    id: "e-sc-1",
    category: "Express JS",
    topic: "Scaffolding",
    question: 'What is "Scaffolding" in Express?',
    answer:
      "It is the process of setting up a standardized project structure (folders for routes, models, controllers) automatically or through templates.",
  },
  {
    id: "e-sc-2",
    category: "Express JS",
    topic: "Scaffolding",
    question: "What is express-generator?",
    answer:
      "A CLI tool that quickly creates a skeleton Express application with predefined folders and configurations (e.g., view engine, public folder).",
  },
  {
    id: "e-sc-3",
    category: "Express JS",
    topic: "Scaffolding",
    question: "What is the MVC pattern?",
    answer:
      "Model-View-Controller. A software architecture that separates logic into Models (Data), Views (UI), and Controllers (Logic) for better maintainability.",
  },
  {
    id: "e-sc-4",
    category: "Express JS",
    topic: "Scaffolding",
    question: "Why is it better to separate routes into different files?",
    answer:
      "It prevents the main app.js file from becoming bloated and makes the codebase easier to navigate and maintain as it grows.",
  },
  {
    id: "e-sc-5",
    category: "Express JS",
    topic: "Scaffolding",
    question: "What are common folders in an Express scaffold?",
    answer:
      "controllers/, models/, routes/, middlewares/, config/, and public/.",
  },
];
