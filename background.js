// is there a better way of opening a url without triggering a
// new window or tab? this uses a dummy iframe as link target
var iframe = document.createElement("iframe");
iframe.name = "dummy";
document.body.appendChild(iframe);
var a = document.createElement("a");
document.body.appendChild(a);
a.target = "dummy";

chrome.contextMenus.create({
  "title": "Search Spotify for '%s'",
  "contexts": ["selection"],
  "onclick": function(e, tab) {
    a.href = "spotify:search:" + encodeURIComponent(e.selectionText);
    a.click();
  }
});

