# SyntaxHighlighter

A smart package providing Alex Gorbatchev's [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/) on the **client** side.

For the server side, just use the node-syntaxhighlighter npm package.

## Usage

### Method 1: Use as "normal" (I don't recommend this)

If you format your &lt;pre&gt; blocks as recommend in the apps documentation, just run SyntaxHighlighter.all() in your template's rendered function.  e.g.

```js
Template.example.rendered = function() {
    SyntaxHighlighter.all();
}
```

### Method 2: Return a highlighted version of the given code


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

1. I preferred not to touch the original source code of the package.  Since the package relies on a global SyntaxHighlighter variable, I had to include it using the {raw: true} undocumented package.js directive, and this only seems to work on the client side.

2. On deploy, this sends a minified version of all brushes.  It would be preferable to load brushes on demand, but this would require support for static assets in smart packages, which I don't believe exists (yet).

