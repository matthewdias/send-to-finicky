function finickyOpen(info, tabs) {
	link = info.linkUrl
	link = link.replace(/.*?:\/\//g, "finicky://");
	// console.log(link)
	chrome.tabs.create({ url: link }, function(tab) {
		setTimeout(function() { chrome.tabs.remove(tab.id) }, 1000)
	});
}

chrome.contextMenus.create({
		"id": "finickyopen",
		"title": "Open Link in Finicky",
		"contexts": ['link'],
		"onclick": finickyOpen
	},
	function() {}
);
