function classNameMaker(array){
    result =""
    for(let a of array){
        result = result + a +" "
    }
    return result
}

function selectedElements(element){
    let result = []
    for(let a =0;a<element.length;a++){
        result.push(element[a])
    }
    return result
}

function disableScrolling(){
 
  window.onscroll=function(){window.scrollTo(0, 0);};
  
}

function enableScrolling(){
  window.onscroll=function(){};
}

function selectedItem(element){
    element.style.border = "3px solid yellow"
    element.style.outline = "4px"
}




let blur = document.createElement("div")
blur.style.width = "100%"
blur.style.height = "100%"
blur.style.backgroundColor = "red"
blur.style.position = "absolute"
blur.style.top = 0
blur.style.left =0
blur.style.opacity = 0.4
blur.style.zIndex = 3


function addBlur(){
  
document.body.appendChild(blur)
disableScrolling()
}
function removeBlur(){
  document.body.removeChild(blur)
  enableScrolling()
  
}


let chance2 = true

function mousePos(event) {
    
    if(chance2){
      chance2 = false
      removeBlur()       
    
      let element = document.elementFromPoint(event.clientX,event.clientY)
    
      selectedItem(element)


      function popUp(){
  

        let msj = document.createElement("div")
        msj.style.width = "200px"
        msj.style.height = "100px"
        msj.style.backgroundColor = "blue"
        msj.style.opacity = 0.8
        msj.style.position = "absolute"
        msj.style.top= "60px"
        msj.style.left= "40%"
        msj.style.zIndex = "9"
        msj.style.display = "flex"
        msj.style.flexDirection = "column"
        msj.style.rowGap = "10px"
        msj.style.alignItems = "center"
        msj.style.borderRadius = "10px"       
      
      
        document.body.appendChild(msj)   // message box
      
        let buttonAgree = document.createElement("button")
        let buttonDisAgree = document.createElement("button")
        let question = document.createElement("p")

        question.innerText = "Agree?"
        question.style.height = "10px"
        question.style.fontSize ="12px"
      
      
        buttonAgree.style.width = "55px"
        buttonAgree.style.height = "20px"
        buttonAgree.innerText = "Agree"
        buttonAgree.style.fontSize = "9px"
      
        buttonDisAgree.style.width = "55px"
        buttonDisAgree.style.height = "20px"
        buttonDisAgree.innerText = "Dis agree"
        buttonDisAgree.style.fontSize = "8px"

        msj.appendChild(question)
        msj.appendChild(buttonAgree)
        msj.appendChild(buttonDisAgree)
      
          buttonAgree.addEventListener("click",()=>{
            document.body.removeChild(msj)
            
          let selectedItemClass =  classNameMaker(element.classList)
          let allElements = document.getElementsByClassName(selectedItemClass)
          console.log(allElements)
          let arrayOfElements = selectedElements(allElements)
          arrayOfElements.forEach((element)=>element.click())
            
          })
          buttonDisAgree.addEventListener("click",()=>{
            document.body.removeChild(msj)
            // console.log("Bitdi")
            location.reload()
            
          })
        // return popUp()
      
      }

      popUp()        
      }
    
  }
  
addBlur()
document.addEventListener("click", mousePos);