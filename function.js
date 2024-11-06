const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){

    document.getElementsByTagName('div')[3].innerHTML='TERNOVCHUK'
    document.getElementsByTagName('div')[4].innerHTML='SOFIA'
    document.getElementsByTagName('div')[7].innerText='03.09.2008'
}
node_for_click_all.addEventListener("click",find_edit_all)