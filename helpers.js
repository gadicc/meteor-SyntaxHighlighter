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

Blaze.Template.registerHelper("sh_highlight", new Template('sh_highlight', function () {
    var view = this;
    var content = '';
	var data = Blaze.getData(view);

    if (view.templateContentBlock) {
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
    }
    return HTML.Raw(sh_highlight(content, data.lang));
}));

// if marked is installed, use us as the default highlighter
if (Package) {
	var markedPkg = Package['sp-marked'] || Package['mrt:sp-marked'];
	if (markedPkg)
		markedPkg.marked.setOptions({
		    highlight: sh_highlight
		});
}

