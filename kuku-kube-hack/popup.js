
chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    /*
    var text = request.source;
    text = text.replace(new RegExp("background-color", 'g'), "");
    text = text.replace(new RegExp("span", 'g'), "");
    text = text.replace(new RegExp("style", 'g'), "");
    text = text.replace(new RegExp("<", 'g'), "");
    text = text.replace(new RegExp(">", 'g'), "");
    text = text.replace(new RegExp("=", 'g'), "");
    text = text.replace(new RegExp("\"", 'g'), "");
    text = text.replace(new RegExp(":", 'g'), "");
    text = text.replace(new RegExp("/", 'g'), "");
    text = text.replace(new RegExp(";", 'g'), "\n");
    var count = text.match(/\n/g);
    var len = count.length;
    var row = Math.sqrt(len);
    var y = 0;
    var otext = text.replace(new RegExp("rgb", 'g'),"");
    otext = otext.replace(/[()]/g, "");
    otext = otext.replace(new RegExp("\n", 'g'), ",");
    var myrgb = new Array();
    myrgb = otext.split(",");
    for (i in myrgb ) {
      myrgb[i] = parseInt(myrgb[i], 10); 
    }
    myrgb.pop();
    len = myrgb.length;
    var r1 = myrgb[0];
    var r2 = myrgb[3];
    var r3 = myrgb[6];
    var result = 1;
    i = len;
    if ( r1 == r2 ) {
      if (r1 == r3) {
        i = 9;
        result = 0;
      }
    }
    for ( ; i < len ; ) {
      if (r1 != myrgb[i]) {
        break;
      }
      i = i + 3;
    }
    i = (i / 3) + 1;
    x = Math.ceil(i / row) ;
    y = i % row;
    if (y==0) {
      y=row;
    }
    var pos = x + "," + y + " ";
    /*
    len = count.length;
    for ( i = 1; i <= len; i++) {
      var x = Math.ceil(i / row) ;
      y = y + 1;
      if (y>row) {
        y = y - row;
      }
      var pos = x + "," + y + " ";
      //text = text.replace("rgb", pos);
    }*/ /*
    if (result == 1) {
      message.innerText =  "First row";
    }
    if (result == 0) {
      message.innerText =  pos;
    }
  }
    */
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "kuku-kube-hack.js"
    //file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });

}

window.onload = onWindowLoad;