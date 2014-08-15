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

UI.registerHelper("sh_highlight", Template.__create__('sh_highlight', function () {
    var view = this;
    var data = Blaze.getViewData(view);

    var content = '';
    if (view.templateContentBlock) {
      content = Blaze.toText(view.templateContentBlock, HTML.TEXTMODE.STRING)
        .trimRight();
    }
    console.log(data);
    return HTML.Raw(sh_highlight(content, data.lang));
}));

// if marked is installed, use us as the default highlighter
if (Package && Package['sp-marked']) {
	Package['sp-marked'].marked.setOptions({
	    highlight: sh_highlight
	});
}
