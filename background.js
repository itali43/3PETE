// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    // sends above JSON to current tab
  });
});


// if open_new_tab is sent, it will open a new tab with the request's sent URL
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      var peteURL = "https://www.google.com/search?q=pete+rose&espv=2&site=webhp&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj8krzhkrDTAhWmgFQKHVWnDRUQ_AUIBygC&biw=1440&bih=759#imgrc=84u9eqoesiZXyM:";
      chrome.tabs.create({"url": request.url});
      chrome.tabs.create({"url": request.url2});
      chrome.tabs.create({"url": request.url3});
      chrome.tabs.create({ url: peteURL });
    }
  }
);