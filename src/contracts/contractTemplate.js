const template =`

## Hello, my name is {{name}}.
#### I work for {{employer}}.

Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)

I have {{kids.length}} kids.
### My Kids:
{{#kids}}
  * {{name}} is {{age}}
{{/kids}}

`
export default template
