//Function to show date next to cursor
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
//Function for animation
$(document).ready(function(){
    $("#animatebutton").click(function(){
      var div = $("#animate");  
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '200', opacity: '0.4'}, "slow");
      div.animate({width: '200', opacity: '0.8'}, "slow");
      div.animate({fontSize: '3em'}, "slow");
      div.animate({fontSize: '1em'}, "slow");
    });
  });
//Function for typing in swedish to change color on text
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
//Colour change function
function bytfarg(x,y){
  document.getElementById("fargtext").style.color=y
  document.getElementById("fargnu").innerHTML = x;
  document.getElementById("fargnu").style.color=y;
  document.getElementById("gifen").src="files/gipher.gif";  
}
//Chose a random picture
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
      /*window.onload = function() { 
        window.onfocus = function() { alert('example'); };
    };*/
    //Function containing showable files with their title
    function filer(){
        var articles = [
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 12'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 11'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 10'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 9'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 8'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 7'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 6'
            },
            {
             
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 5'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 4'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 3'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 2'
            },
            {
              onClickLink: 'files/formelblad.pdf',
              imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
              title: 'Vecka 1'
            }
          ]
          ihopslagning(articles);
    }
    //Function containing showable files with their title
    function artiklar(){
        var articles = [
            {
              onClickLink: 'https://www.nynashamnsposten.se/2022-08-18/mullrande-batar-intar-nynashamn--dags-for-nynas-offshore',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/VUrkJLSTuqT5ge8wKLdjN9DYpvQ.jpeg?fit=crop&w=1620&h=911',
              title: 'Mullrande båtar intar Nynäshamn – dags för Nynäs Offshore'
            },
            {
              onClickLink: 'https://www.nynashamnsposten.se/2022-06-22/alvar-och-nils-fyra-pa-sitt-forsta-jolle-sm--tuff-segling-i-hard-vind',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/4128a8f0-3c4f-4b5f-9252-ce8665973e5c.jpeg?fit=crop&w=1620&h=911',
              title: 'Alvar och Nils fyra på sitt första jolle-SM – tuff segling i hård vind'
            },
            {
              onClickLink: 'https://www.nynashamnsposten.se/2022-03-26/spadtag-for-nss-nya-varvsomrade--omkring-70-nya-batplatser-till-hosten',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/e9454ead-c701-4d18-b1e1-dba13e02812c.jpeg?fit=crop&w=1620&h=911',
              title: 'Spadtag för NSS nya varvsområde – omkring 70 nya båtplatser till hösten'
            },
            {
              onClickLink: 'https://www.nynashamnsposten.se/2021-08-09/stora-seglingsnamn-pa-plats-under-starbat-sm',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/be07a189-654f-4423-a6cd-762d8fde8724.jpeg?fit=crop&w=1620&h=911',
              title: 'Stora seglingsnamn på plats under starbåt-SM'
            },
            {
              onClickLink: 'https://www.nynashamnsposten.se/2021-08-04/starbat-sm-halls-i-nynashamn--20-batar-tavlar',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/e80f7bc7-0e07-4274-9329-c020ca820cf8.jpeg?fit=crop&w=1620&h=911',
              title: 'Starbåt-SM hålls i Nynäshamn – 20 båtar tävlar'
            },
            {
              onClickLink: 'https://www.nynashamnsposten.se/2021-04-29/priset-ar-i-hamn-nss-ar-arets-batklubb--for-oss-handlar-det-inte-bara-om-segling',
              imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/598f73a0-da2c-42a6-9d3e-dd929d7b99d3.jpeg?fit=crop&w=1620&h=911',
              title: 'Priset är i hamn! NSS är Årets båtklubb – ”För oss handlar det inte bara om segling”'
            }
          ]
          
              ihopslagning(articles);
            }
        //Function to make a new "image" containing both text and image into a link 
        function ihopslagning(articles){
            var rootElement = document.getElementById("imageGalleryWithTitle");
          
              for (let i=0; i < articles.length; i++) {
                //Create the container
                var itemContainer = document.createElement("a");
                itemContainer.classList.add("article-container");
                var href = document.createAttribute("href");
                href.value = articles[i].onClickLink;
                itemContainer.setAttributeNode(href);
                var target = document.createAttribute("target");
                target.value = '_blank';
                itemContainer.setAttributeNode(target);
          
                //Create Image
                var image = document.createElement("img");
                image.classList.add("article-image");
                var src = document.createAttribute("src");
                src.value = articles[i].imgageSource;
                image.setAttributeNode(src);
                var alt = document.createAttribute("alt");
                alt.value = articles[i].title;
                image.setAttributeNode(alt);
          
                //Create title
                var h3 = document.createElement("h3");
                h3.classList.add("article-title");
                var h3Text = document.createTextNode(articles[i].title);
                h3.appendChild(h3Text);
          
                //Atach image and title to container
                itemContainer.appendChild(image);
                itemContainer.appendChild(h3);
          
                //Attach element to root div
                rootElement.appendChild(itemContainer);
              }
        }
    function fade(){
        $(document).ready(function(){
            $("#button1").click(function(){
              $("#text1").fadeTo("slow", 0.15);
              $("#text2").fadeTo("slow", 0.4);
            });
          });
          $(document).ready(function(){
            $("#button2").click(function(){
              $("#text1").fadeTo("slow", 1);
              $("#text2").fadeTo("slow", 1);
            });
          });
    }