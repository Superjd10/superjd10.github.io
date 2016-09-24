$(function() {
	var html = $("html").html();
	$("<pre />", {
		"html":   '&lt;!DOCTYPE html>\n&lt;html>\n' +
				$("html")
					.html()
					.replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>') +
				'\n&lt;/html> \n Live view-source thanks to <a href="https://css-tricks.com" title="CSS Tricks">CSS Tricks</a>',
				"class": "prettyprint"
	}).appendTo("#source-code");

	prettyPrint();
});
