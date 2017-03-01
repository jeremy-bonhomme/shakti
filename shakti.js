function finIntro() { document.body.className = 'introOK'; }
document.getElementById('intro').onended = finIntro;
document.getElementById('btn').onclick = function() {
var player = document.getElementById('intro');
if ( player.paused )	{ player.play(); }			
else					{ player.pause(); }
};

function finIntro() { document.body.className = 'introOK'; }
document.getElementById('intro').onended = finIntro;
document.getElementById('btn2').onclick = function() {
var player = document.getElementById('intro');
if ( player.paused )	{ player.play(); }
else					{ player.pause(); }
};

sfHover = function() {
var sfEls = document.getElementById("menu").getElementsByTagName("LI");
for (var i=0; i<sfEls.length; i++) {
sfEls[i].onmouseover=function() {
this.className+=" sfhover";
}
sfEls[i].onmouseout=function() {
this.className=this.className.replace(new RegExp(" sfhover\\b"), "");}
}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);