
function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "kuku-kube-hack.js"
  }, function() {
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });

}

window.onload = onWindowLoad;