const input = document.querySelector('input')
const prm = document.querySelector('button')
const todo = document.querySelector('.todo')
const btn = document.querySelector('.btn')


const addTask = (e) =>{
        e.preventDefault()
        const liEl = document.createElement("li")
        const delEl =document.createElement("button")


        delEl.innerHTML = '<i class="fa-solid fa-trash"></i>'

        if(input.value !== ""){
                liEl.textContent =input.value
                liEl.appendChild(delEl)
                todo.appendChild(liEl)
                input.value = "";
        }else{
                alert("fadlan gali xog🖐")
        }
        delEl.addEventListener("click", function(){
                const delet = confirm("Mahubtaa Inaad Masaxayso")
                if(delet== true){
                        const parent = this.parentNode
                        parent.remove()
                }
        })
        
}
  prm.addEventListener("click", addTask)

  btn.addEventListener("click",()=>{
        if(confirm("Ma Hubtaa dhamaan Inaad Masaxayso"))
        todo.innerHTML ="";
  })