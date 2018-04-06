## A demo of a Ricardian contract.

[Demo]( https://uxlayouts.github.io/contracts/)

### Made with:
* Create-React-App
* Handlebars
* React-Markdown

### How does it work?
* Templates are just returned .js files that that use Markdown for styling and use the Handlebars/Mustache logic/variables
* A JSON file stores all the key/value pairs that are replaced at the time of handlebar compilation
* The contractTemplate.js is compiled as the contractVars.json are swapped in and what is left is a string of Markdown
* React-Markdown takes the string of Markdown and turns it into standard HTML and the results are rendered in the self-returned pure function.
