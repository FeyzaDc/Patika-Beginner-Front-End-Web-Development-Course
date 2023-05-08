const task = document.querySelector("#task")
const list = document.querySelector("#list")
const liveToast = document.querySelector("#liveToast")


function newElement() {
    if (task.value == '' || !task.value.trim()) {
        $(`.error`).toast("show")
    } else {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = task.value
        $(`.success`).toast("show")
       
        let remove_btn = document.createElement("span");
        remove_btn.classList.add("close");
        let txt = document.createTextNode("\u00D7");
        remove_btn.appendChild(txt)

        list.appendChild(liDOM)
        liDOM.appendChild(remove_btn);
        remove_btn.addEventListener("click", function() {
            liDOM.remove()
        });               
    }

    task.value = ""
}
