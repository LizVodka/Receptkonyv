$(function(){    
    $.ajax({url: "receptek.json", success: function(result){ receptekTomb=(result); kiir();}});
    $("article").on("click","tr",megjelenit);
});

var receptekTomb=[];

function kiir(){
	$("article").eq(1).empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Elkészítési idő</th><th>Elérési út</th><th>Leírás</th><th>Kategória</th><th>Ár</th></tr>");
//    for (var item in receptekTomb[0]) {
//        $("article table tr").append("<th id='" + item + "'>" + item + " </th>"); 
//    }

    for (var i = 0; i < receptekTomb.length; i++) {
        $("article table").append("<tr id='"+i+"'>");
        for (var item in receptekTomb[i]) {
            $("article table tr").eq(i + 1).append("<td>" + receptekTomb[i][item] + " </td>");
        }
    }
    
}

function megjelenit(){
    var id=Number($(this).attr("id"));
    megjelenitRecept(id);
}

function megjelenitRecept(recept){
    $("section").empty();
    $("section").append("<h2></h2>");
	$("section h2").append(recept);
}

