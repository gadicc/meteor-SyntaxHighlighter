Package.describe({
    summary: "Alex Gorbatchev SyntaxHighlighter, *client-side*"
});

Package.on_use(function (api) {
	api.use(['ui', 'templating'], 'client');
  api.use('sp-marked', 'client', { weak: true });

	/*
	api.add_files(
		'lib/syntaxhighlighter_3.0.83/scripts/shCore.js',
		'client', { bare: true }
	);
	*/
	api.add_files('shCore-meteor.js', 'client');

    api.add_files([
		// TODO, even though we're serving minified, dynamic loading would be nice
		//'lib/syntaxhighlighter_3.0.83/scripts/shCore.js',
		//'lib/syntaxhighlighter_3.0.83/scripts/shLegacy.js',
		//'lib/syntaxhighlighter_3.0.83/scripts/shAutoloader.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushAppleScript.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushAS3.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushBash.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushColdFusion.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushCpp.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushCSharp.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushCss.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushDelphi.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushDiff.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushErlang.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushGroovy.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushJavaFX.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushJava.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushJScript.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushPerl.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushPhp.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushPlain.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushPowerShell.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushPython.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushRuby.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushSass.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushScala.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushSql.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushVb.js',
		'lib/syntaxhighlighter_3.0.83/scripts/shBrushXml.js'
	], 'client');

    api.add_files([
		'lib/syntaxhighlighter_3.0.83/styles/shCore.css',
		'lib/syntaxhighlighter_3.0.83/styles/shThemeDefault.css'
	], 'client');

	api.add_files(['helpers.html', 'helpers.js'], 'client');
	api.export(['SyntaxHighlighter', 'sh_highlight'], 'client');
});
