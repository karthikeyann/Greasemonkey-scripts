// ==UserScript==
// @name        kuku-kube high score
// @namespace   lxkarthi
// @include     http://106.186.25.143/kuku-kube/en-3/
// @version     1
// @grant       none
// ==/UserScript==

// @version     2 (with chrome extension support)

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function godeep () {
  var divel  =  document.getElementById("box");
  var elems = divel.getElementsByTagName('span'), i;
  var color1="", color2="";
  var color1cnt=0, color2cnt=0;
  var color1elem, color2elem;
  var color;
    for (i in elems) {
      data=elems[i].getAttribute('style');
      color = data.split('(')[1].split(')')[0].split(',');
      if( color1 ==""  || arraysEqual(color1, color) ){
        color1 = color;
        color1cnt++;
        color1elem=i;
      }
      else{
          if( color2 ==""  || arraysEqual(color2, color)  ){
        color2 = color;
        color2cnt++;
        color2elem=i;
        }
      }
      if( color1cnt>1 && color2cnt==1){
        elems[color2elem].click();
        break;
      }
      else if (color2cnt>1 && color1cnt==1){
        elems[color1elem].click();
        break;
      }
    }
}

function stopdeep (intervalID) {
  window.clearInterval(intervalID);
  console.log('stopdeep');
  console.log(continueDeep);
}

function init () {
  console.log('init');
  var intervalID = window.setInterval(godeep, 1);
  var timeoutID = window.setTimeout(stopdeep, 61000, intervalID);
  console.log('end');
  addOnclickInContainer('btn btn-restart'); 
}

function addOnclickInContainer(matchClass) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
          elems[i].addEventListener('click', init, false);
        }
    }
}
 addOnclickInContainer('btn play-btn');

