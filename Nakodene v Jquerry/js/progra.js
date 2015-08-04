var Words = Array();
var pocet;
window.onload=function(){//zbehne na zacatku

	$( "#texBox" ).append( "<input type=\"text\" placeholder=\"TODO\" style=\"font-size: 2em\">" );
	$( "#addButton" ).append( "<button type=\"button\" class=\"btn btn-success\">Add</button>");
	$( "#addButton" ).append( "<button type=\"button\" class=\"btn btn-danger\">Clear</button>");
    $(":button").css({'margin': '1em', 'width':'6em'});//lne specificky
    $( "#deleteDone" ).append( "<button type=\"button\" class=\"btn btn-danger\">Delete Done</button>");

pocet =localStorage.getItem("pocet");
for (var i = 0; i <= pocet; i++) {
	Words[i] = localStorage.getItem(i);
}

Words.forEach(function (item, index, Words) {
	$("#checklist").append('<li>'+ item +'</li>');
});

refresh();

$('button').click(function() {
	var text = $(this).text();
	var textBox = $("input").val();
	if(textBox == "" && text !="Delete Done") {alert("Musis dacoz zadat");return;}
	switch(text){
		case"Add":console.log(textBox);
		$("#checklist").append('<li>'+ textBox +'</li>');
		var t =$("li").last();
		t.on('click' , function(){
			console.log(this);
			var $va = $(this);
			$va.toggleClass( 'marked');
		});
		$("input").val(" ");
		pocet++;
		localStorage.setItem("pocet", pocet);
		localStorage.setItem(pocet, textBox);
		break;
		case"Clear":$("input").val(" ");break;
	}
});

$("input").keypress(function(e) {
	if(e.which == 13) {
		add();
	}
});
};

function refresh(){
	$("li").on('click' , function(){
		console.log(this);
		var $va = $(this);
		$va.toggleClass( 'marked');
	});
	$("#deleteDone").click(function(){
		$( "li" ).each(function() {
			if( $( this ).hasClass( "marked" )){
				this.remove();
				pocet--;

			}
		});  
		localStorage.setItem("pocet", pocet);
	});
}

function add(){
	var textBox = $("input").val();
	if(textBox == "" ) {alert("Musis dacoz zadat");return;}
	$("#checklist").append('<li>'+ textBox +'</li>');
	var t =$("li").last();
	t.on('click' , function(){
		console.log(this);
		var $va = $(this);
		$va.toggleClass( 'marked');
	});
	$("input").val("");
	pocet++;
	localStorage.setItem("pocet", pocet);
	localStorage.setItem(pocet, textBox);
}