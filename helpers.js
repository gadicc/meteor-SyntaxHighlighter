// helper function to choose the right brush
function findBrush(lang) {
    for (brush in SyntaxHighlighter.brushes)
        for (var i=0; i < SyntaxHighlighter.brushes[brush].aliases.length; i++)
            if (SyntaxHighlighter.brushes[brush].aliases[i] == lang)
                return SyntaxHighlighter.brushes[brush];
    return false;
}

// e.g. var highlighted_code = highlight(code, 'js');
sh_highlight = function(code, lang) {
    var brush = findBrush(lang);
    if (brush) {
        var highlighter = new brush();
        highlighter.init();
        return highlighter.getHtml(code);
    } else {
        return code;
    }
}

Template.sh_highlight.helper = function(component, options) {
    var code = UI.toRawText(component).trimRight();
    return Spacebars.SafeString(sh_highlight(code, this.lang));
}

UI.registerHelper('sh_highlight', function(options) {
	var code = options.fn(this);
	var lang = options.hash.lang;
	return new Handlebars.SafeString(sh_highlight(code, lang));
});

// if marked is installed, use us as the default highlighter
if (Package && Package['sp-marked']) {
	Package['sp-marked'].marked.setOptions({
	    highlight: sh_highlight
	});
}
