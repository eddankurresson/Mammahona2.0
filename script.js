window.onmousemove = function(e) {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    document.getElementsByClassName("currentdate")[0].innerHTML = "Dagens datum " + day + "/" + month + "/" + year;
    if (e.target.classList.contains('date')) {
    		//	Content of date which is hovered
        var $target = e.target.nextElementSibling;
        
        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
        		$target.classList.add('visible');
        } else {
            //	Get viewport offset of tooltip element
            var offset = $target.parentElement.getBoundingClientRect();
            //	Tooltip distance from mouse(px)
            var tipDist = 5;
            //	Calc and set new tooltip location
            $target.style.top = (e.clientY - offset.top + tipDist) + 'px';
            $target.style.left = (e.clientX - offset.left + tipDist) + 'px';
        }
    } else {
    		//	Remove visible class
        var floattext = document.getElementsByClassName('floattext');
        for (var i = 0; i < floattext.length; i++) {
        		floattext[i].classList.remove('visible');
        }
    }

};
function textfarg()
{ 
  var x = document.getElementById("textinput").value;;
 
  switch(x){
    case 'gul' || 'Gul' || 'GUL':
    bytfarg(x,'yellow')
      break;
    case 'röd' || 'Röd' || 'RÖD':
      bytfarg(x,'red')
      break
    case 'blå' || 'Blå' || 'BLÅ':
      bytfarg(x,'blue')
      break;
    case 'orange' || 'Orange' || 'ORANGE':
      bytfarg(x,'orange')
      break;
    case 'lila' || 'Lila' || 'LILA':
      bytfarg(x,'purple')
      break;
    case 'rosa' || 'Rosa' || 'ROSA':
      bytfarg(x,'pink')
      break;
    case 'grön' || 'Grön' || 'GRÖN':
      bytfarg(x,'green')

      break;
    case 'svart' || 'Svart' || 'SVART':
      bytfarg(x,'black')
      break;
    case 'vit' || 'Vit' || 'VIT':
      bytfarg(x,'white')
      break;
    case 'guld' || 'Guld' || 'GULD':
      bytfarg(x,'gold')
      break;
    default: 
    document.getElementById("fargnu").innerHTML = "Den färgen finns inte möjlig.";
    document.getElementById("gifen").src="files/giphy.gif"
  }
}
function bytfarg(x,y){
  document.getElementById("fargtext").style.color=y
  document.getElementById("fargnu").innerHTML = x;
  document.getElementById("fargnu").style.color=y;
  document.getElementById("gifen").src="files/gipher.gif";  
}
function bildbyte()
      { 
        var x = Math.floor(Math.random()*3);
        if(x==0){
          var y = "files/windsurf.jpeg"
        }
        else if (x==1){
          var y = "files/logga.png"
        }
        else{
            var y="files/piratbat.png"
        }
        document.getElementById("bild").src=y;
      }