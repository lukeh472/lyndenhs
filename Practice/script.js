function clearPageOfChoices(scriptSelection){
    $("#choiceBody").remove()
    //$("body").append("<script src='" +scriptSelection + "'></script>");
    $('<script src="' + scriptSelection+'"></' + 'script>').appendTo(document.body)
}

function practiceByGroup(){
    clearPageOfChoices("group_practice_script.js")
}

function practiceByTotal(){
    clearPageOfChoices("total_practice_script.js")
}