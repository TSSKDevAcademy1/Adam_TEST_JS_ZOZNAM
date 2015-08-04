var words = new Array();
var pocet ;
onLoad();
setButtons();
createList();

function onLoad(){
	pocet =localStorage.getItem("pocet");
	for (var i = 0; i <= pocet; i++) {
		words[i] = localStorage.getItem(i);
	}
	document.getElementById("myText").setAttribute("onkeypress","handleKeyPress(event)");
}

function setButtons(){
		var element = document.createElement("Button");
		element.setAttribute("class","button");
	    element.addEventListener("click", addClick);
		element.setAttribute("class","btn btn-success");
        element.setAttribute("style","width:6em; margin-right: 3em;");
		element.textContent = "add"; //deletedone
	    element.style.margin = "2em"; 
		document.getElementById("addButton").appendChild(element);
                    
		var element = document.createElement("Button");
		element.setAttribute("class","button");
		element.setAttribute("class","btn btn-danger");
        element.setAttribute("style","width:8em; margin-right: 0.1em;");
		element.addEventListener("click", Delete);
		element.textContent = "DeleteDone"; //deletedone
		document.getElementById("deletedone").appendChild(element);

		var element = document.createElement("Button");
		element.setAttribute("class","button");
		element.setAttribute("class","btn btn-danger");
        element.setAttribute("style","width:6em; margin-right: 2em;");
        element.addEventListener("click", refresh);
		element.textContent = "Delete"; //deletedone
		document.getElementById("addButton").appendChild(element);
	}

function refresh(){
	document.getElementById("myText").value = " ";
	console.log("stl;acil si delte");
}
 
 window.onload = function(){
     document.getElementById("myText").setAttribute("onkeypress","handleKeyPress(event)");
  }

function Delete(){
	var el = document.getElementById("checklist");
	var el1 = el.childNodes;
	var pole =Array();
	var pom = 0;
	var listItems = document.getElementById("checklist").getElementsByTagName("li");

	for (var i = 0; i < listItems.length; i++) {
		if(listItems[i].style.textDecoration !='line-through')
		{
			pole[pom] = listItems[i].textContent;
			pom++;	
		}
	}

	var list = document.getElementById("checklist");
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);

	}

	words = pole;
	lisst();
	localStorage.setItem("pocet", words.length-1);

	for (var i = 0; i < words.length; i++) {
		localStorage.setItem(i, words[i]);
	}
}

function addClick(){
	var el =document.getElementById("myText");
	var t = el.value;
	if(t === "")
	{
		alert("musis zadat nieco");
	}
	else
	{
		var x = document.createElement("UL");
		x.setAttribute("id", "myUL");
		document.body.appendChild(x);

		var y = document.createElement("LI");
		words[words.length] = t;
		y.addEventListener("click", Preciarkni);
		var t = document.createTextNode(t);
		y.appendChild(t);
		document.getElementById("checklist").appendChild(y);

        pocet++;
        localStorage.setItem("pocet", pocet);
        localStorage.setItem(pocet, t.textContent);
        console.log("tuan si");
	    document.getElementById("myText").value = " ";
	}


}
 
function createList(){
	lisst();
}

function Preciarkni(event){ 
	var el = event.target;
	el.setAttribute("disabled","false");
	var style = (el.style.textDecoration!='line-through')?'line-through':'none';
	el.style.textDecoration = style;
}

function lisst(){
	for (var i = 0; i < words.length; i++) {
		var x = document.createElement("UL");
		x.setAttribute("id", "myUL");
		document.body.appendChild(x);

		var y = document.createElement("LI");
		y.addEventListener("click", Preciarkni);
		var t = document.createTextNode(words[i]);
		y.appendChild(t);
		document.getElementById("checklist").appendChild(y);
	}
}

function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key==13){
     addClick();
     }
}

