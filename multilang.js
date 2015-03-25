// Simple Javascript MultiLanguage-Tool for the Game Jam by Jonas Lieb

var lang;

function setLanguage(langId) {
	var localizedTags = $("[lang]");
	for (var i=0; i<localizedTags.length; i++) {
		var tag = $(localizedTags[i]);
		if (tag.attr("lang") == langId) {
			tag.show();
		} else {
			tag.hide();
		}
	}
	$.cookie("language", langId);
	lang = langId;
}

function getLanguage() {
	return lang;
}

function initLanguage() {
	if (["de", "en"].indexOf($.cookie("language")) != -1) {
		setLanguage($.cookie("language"));
	} else if (navigator.language.substr(0,2) == "de") {
		setLanguage("de");
	} else {
		setLanguage("en");
	}
}
