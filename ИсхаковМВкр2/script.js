function searchFunc(){
    var input, user_input,list,li;
    input = document.getElementById("search-input")
    user_input = input.value.toUpperCase()
    list = document.getElementById("list")
    li = list.getElementsByTagName("li")
    
    for (i=0; i < li.length; i++){
        var element = li[i].innerText.toUpperCase()
        if (!element.includes(user_input)){
            li[i].style.display = "none"
        }
        else {
            li[i].style.display = "flex"

        }
    }
}