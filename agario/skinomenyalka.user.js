// ==UserScript==
// @name         AGARIO UNIVERSE with asshole by AnTiMuDe
// @version      5.0
// @description  10000000 in 1
// @author       soft
// @match        *://agar.io/*
// @run-at       document-start
// @connect      cdn.ogario.ovh
// @connect      ogar.io
// @connect      deltav4.glitch.me
// @connect      hslo.io
// @connect		 www.agartool.io
// @connect		 imasters.org.ru
// @connect      legendmod.ml
// @connect		 ogar.ovh
// @grant        GM.xmlHttpRequest
// ==/UserScript==

//window.stop()
var mode = location.pathname.slice(1);

//Make the DIV element draggagle:

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; localStorage['assholeTop'] = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; localStorage['assholeLeft'] = (elmnt.offsetLeft - pos2) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var mudichpanel = `
<div id="mydiv" style="position: absolute; width: 132px; background: #222222; color: gray; border-radius: 8px; text-align: center; z-index: 9999">
<a onmouseover="this.style.color='#fff';"
onmouseleave="this.style.color='gray';"
style="color:gray; text-decoration:none;"
onclick="document.getElementById('asshole').style.display='block'; this.style.display='none';" id="assOpener">Asshole loading...</a>

<div id="asshole" style="display:none;">

<a onclick="document.getElementById('asshole').style.display='none'; document.getElementById('assOpener').style.display='block';" style="color:red;  text-align: center;" id="assCloser">Close asshole</a>

<div style="clear:both;"></div>

<a style="background: #2e2e2e; padding: 8px; display: block; color: #fff;" onclick="
p = prompt('Enter nickname or press cancel = all players in the leaderboard. This action does not work without scantriсk userscript! An empty value will close the window.', '');
if(p != '' || p != null || p != false) {
app.playerData.nick = p;
}
if(p == null) {
s = '';
aa.leaderboard.forEach(function(pl){
s += pl.nick+', ';
setInterval(function() {app.playerData.nick = pl.nick}, 1);
});
alert('Fucked nicks: '+s);
}">
Hack skins
</a>


<a style="background: #2e2e2e; padding: 8px; display: block; color: #fff;" onclick="
ss = '';
aa.leaderboard.forEach(function(pl){
ss += pl.nick+', ';
});
prompt('Nicks: '+ss, ss);
">
Copy nicks
</a>


<a style="background: #2e2e2e; padding: 8px; display: block; color: #fff;" onclick="
function rand( min, max ) {
if( max ) {
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * (min + 1));
}
}
setInterval(function() {random = rand(0, 999999); app.playerData.PlayerID = random;}, 1000);
alert('Activated!');">
Anon mode
</a>


</div>
</div>`

setTimeout(function() {
    dragElement(document.getElementById("mydiv"));
    document.getElementById("mydiv").style.left = localStorage['assholeLeft'];
    document.getElementById("mydiv").style.top = localStorage['assholeTop'];
    document.getElementById("assOpener").innerHTML = 'Open asshole';
}, 10000);


var url;
switch(mode){
    case 'delta': url = 'https://deltav4.glitch.me/v4/index.html'
        break;
    case 'dev': url = 'http://ogar.ovh/v4/index.html'
        break;
    case 'dev2': url = 'http://ogar.ovh/v4/index2.html'
        break;
    case 'local':
    case 'latest/mc':case 'latest/mc/':
        url = 'http://ogar.io/v4/beta/index.html'
        location.protocol=='https:'&&(location.href='http://agar.io/latest/mc',url=null)
        break;
    case 'hslo':
        window.stop();
        document.documentElement.innerHTML = "";
        url = null
        GM.xmlHttpRequest({
            method : "GET",
            url : 'https://hslo.io/install.user.js',
            onload : function(e) {
               new Function(['GM_info, GM_xmlhttpRequest'],e.responseText)(GM.info, GM.xmlHttpRequest)
            }
        });
        break;
    case 'at':case 'at/':case 'agartool':case 'agartool/':
        window.stop();
        document.documentElement.innerHTML = "";
        url = null
        GM.xmlHttpRequest({
            method : "GET",
            url : 'https://www.agartool.io/agartool.user.js',
            onload : function(e) {
               new Function(e.responseText)()
            }
        });
        break;
    case 'va':case 'vanilla':case 'va/':case 'vanilla/':
        window.stop();
        document.documentElement.innerHTML = "";
        url = null
        GM.xmlHttpRequest({
            method : "GET",
            url : 'http://imasters.org.ru/agar/js/vanilla.user.js',
            onload : function(e) {
               new Function(e.responseText)()
            }
        });
    break;
    case 'legendmod':
    case 'lm':
        window.stop();
        document.documentElement.innerHTML = "";
        url = null
        GM.xmlHttpRequest({
            method : "GET",
            url : 'https://legendmod.ml/LMexpress/LMexpress.user.js',
            onload : function(e) {
               new Function(['GM_info, GM_xmlhttpRequest'],e.responseText)(GM.info, GM.xmlHttpRequest)
            }
        });
    break;
    default: url = 'https://cdn.ogario.ovh/v4/beta/'
        console.log(mode)

}
console.log('mode',mode,url)


document.documentElement.innerHTML = "Loading";
GM.xmlHttpRequest({
    method: "GET",
    url: url,
    onload: function(e) {
        var D       = window.document;
        var newDoc  = D.implementation.createHTMLDocument ();
        D.replaceChild (
          D.importNode (newDoc.documentElement, true),
          D.documentElement
        );
        document.open();
        document.write(e.response+mudichpanel);
        document.close();

    }
});
