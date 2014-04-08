# SyntaxHighlighter

A smart package providing Alex Gorbatchev's [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/) on the **client** side.

For the server side, just use the node-syntaxhighlighter npm package.

If you have `sp-marked` installed too, SyntaxHighlighter sets itself as the
default highlighter, and will be used automatically with no additional work
on your part in <code>```js</code> type markdown escapes.

## Usage

### Method 1: Our way (recommended)

Use in a template like this:

```html
{{#sh_highlight lang="js"}}function etc() { ... }{{/sh_highlight}}
```

Or directly in Javascript thus:

```js
var highlighted = sh_highlight(text, lang);
```

### Method 2: Use as "normal" (I don't recommend this)

If you format your &lt;pre&gt; blocks as recommend in the apps documentation, just run SyntaxHighlighter.all() in your template's rendered function.  e.g.

```js
Template.example.rendered = function() {
    SyntaxHighlighter.all();
}
```

### Method 3: For reference, the code used in our helpers


```js
// helper function to choose the right brush
function findBrush(lang) {
	for (brush in SyntaxHighlighter.brushes)
		for (var i=0; i < SyntaxHighlighter.brushes[brush].aliases.length; i++)
			if (SyntaxHighlighter.brushes[brush].aliases[i] == lang)
				return SyntaxHighlighter.brushes[brush];
	return false;
}

// e.g. var highlighted_code = highlight(code, 'js');
highlight = function(code, lang) {
	var brush = findBrush(lang);
	if (brush) {
		var highlighter = new brush();
		highlighter.init();
		return highlighter.getHtml(code);
	} else {
		return code;
	}

// example to plug into the marked smart package
marked.setOptions({
	highlight: highligh
});
```

## Smart package info

1. On deploy, this sends a minified version of all brushes.  It would be preferable to load brushes on demand, but this would require support for static assets in smart packages, which I don't believe exists (yet).

