// content.js
// content is strictly (..well almost) able to communicate with the current tab, send msgs to background to communicate with others
// alert("Hello from your Chrome extension!")

var firstHref = $("a[href^='http']").eq(0).attr("href");
var secondHref = $("a[href^='http']").eq(1).attr("href");
var thirdHref = $("a[href^='http']").eq(2).attr("href");
 var numberOfLinks = document.getElementsByTagName('a').length;

console.log(firstHref);
console.log(secondHref);
console.log(thirdHref);
console.log("number of links below")
console.log(numberOfLinks);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("hey");

// listen to background to see if browser action button is hit
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      var numberOne = getRandomInt(0,25)
      var numberTwo = getRandomInt(0,25)
      var numberThree = getRandomInt(0,25)



	    var firstHref = $("a[href^='http']").eq(numberOne).attr("href");
	    var secondHref = $("a[href^='http']").eq(numberTwo).attr("href");
		  var thirdHref = $("a[href^='http']").eq(numberThree).attr("href");
      
      console.log("well, these are the numbers you got :D");

      console.log(numberOne);
      console.log(numberTwo);
      console.log(numberThree);

  			// sending back the URL from the first link on page to Background so it can talk to browser
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref, "url2": secondHref, "url3": thirdHref});

    }
  }
);

