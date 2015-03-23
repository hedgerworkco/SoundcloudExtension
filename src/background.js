const SOUNDCLOUD_URL = 'https://soundcloud.com/';
let url;
let execute = false;

(function() {
  chrome.tabs.onUpdated.addListener((tabId, details, tab) => {
    url = tab.url;

    if (details.url && details.url.beginsWith(SOUNDCLOUD_URL) && details.status === 'loading') {
      execute = true;
    }

    if (execute) {
      if (tab.url && tab.url.beginsWith(SOUNDCLOUD_URL) && tab.status === "complete") {
        chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, response => {});
      }
    }
  });

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {} );
})();