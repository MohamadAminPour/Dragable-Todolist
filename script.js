let addTodo = document.getElementById('addTodo')
let real = document.getElementById('real')
let modal = document.getElementById('modal')
let close = document.getElementById('close')
let del = document.getElementById('del')
let btn_modal = document.getElementById('btn_modal')
let input_modal = document.getElementById('input_modal')
let notStarted = document.getElementById('notStarted')

//--------modal----------
addTodo.addEventListener('click', function () {
   real.style.filter = 'blur(20px)'
   modal.style.top = '5%'
})
close.addEventListener('click', function () {
   real.style.filter = 'blur(0px)'
   modal.style.top = '-50%'
})

function addMyTodo() { //-------add todo---------
   //--------new div----------
   let newDiv = document.createElement('div')
   newDiv.style.backgroundColor = 'red'
   newDiv.style.width = '95%'
   newDiv.style.margin = '5px'
   newDiv.style.borderRadius = '5px'
   newDiv.style.display = 'flex'
   newDiv.style.alignItems = 'center'
   newDiv.style.justifyContent = 'space-between'
   newDiv.setAttribute('id', 'newP')
   newDiv.setAttribute('draggable', 'true')
   newDiv.setAttribute('ondragstart', 'dragHandler(event)')
   notStarted.append(newDiv)

   //----------new p------------
   let newP = document.createElement('p')
   newP.innerHTML = input_modal.value
   newP.style.padding = '0 10px'
   newP.style.textAlign = 'justify'
   newDiv.append(newP)

   //----------new i-------------
   let newI = document.createElement('i')
   newI.setAttribute('class', 'bx bx-x')
   newI.style.padding = '0 5px'
   newI.style.fontSize = '20px'
   newI.style.cursor = 'pointer'
   newDiv.append(newI)

   //-------پاک کردن والد-------
   newI.addEventListener('click', function (event) {
      newDiv.style.transition = 'all 1s ease'
      newDiv.style.transform = 'scale(0)'


      setTimeout(function(){
         event.target.parentElement.remove()
      },1000)
      
   })
}

function dragHandler(event) {
   event.dataTransfer.setData('idElem', event.target.id)
}

function dropHandler(event) {
   let targetElem = event.dataTransfer.getData('idElem')
   let targetId = document.getElementById(targetElem)
   event.target.append(targetId)
}

function dragOverHandler(event) {
   event.preventDefault()
}

btn_modal.addEventListener('click', function () {
   let inputValuelength = input_modal.value.length
   if (inputValuelength < 1) {
      alert('no')
   }
   else {
      addMyTodo()
      real.style.filter = 'blur(0px)'
      modal.style.top = '-50%'
      input_modal.value = ''
   }
})