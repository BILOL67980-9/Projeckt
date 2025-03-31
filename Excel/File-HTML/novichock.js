let f=document.querySelector(".f")
let f1=document.querySelector(".f1")
let f2=document.querySelector(".f2")
let f3=document.querySelector(".f3")
let f4=document.querySelector(".f4")
let f5=document.querySelector(".f5")
let div1=document.querySelector(".div1")
let p1=document.querySelector(".p1")
let div2=document.querySelector(".div2")
let p2=document.querySelector(".p2")
let div3=document.querySelector(".div3")
let p3=document.querySelector(".p3")
let f6=document.querySelector(".f6")
let div4=document.querySelector(".div4")
let p4=document.querySelector(".p4")
let div5=document.querySelector(".div5")
let p5=document.querySelector(".p5")
let f7=document.querySelector(".f7")
f.onclick=()=>{
    f.innerHTML='⋏'

    f1.style.display="block"
}
f3.onclick=()=>{
    f3.innerHTML='⋏'
  div1.style.display="block"    
}
f4.onclick=()=>{
    f4.innerHTML='⋏'

  div2.style.display="block"    
}
f2.onclick=()=>{
    f.innerHTML='⋎'

    f1.style.display="none"
}
p1.onclick=()=>{
    f3.innerHTML='⋎'

    div1.style.display="none"
}

p2.onclick=()=>{
    f4.innerHTML='⋎'

    div2.style.display="none"
}

p3.onclick=()=>{
    f5.innerHTML='⋎'

    div3.style.display="none"
}
f5.onclick=()=>{
    f5.innerHTML='⋏'
    div3.style.display="block"    
  }
  p4.onclick=()=>{
    f6.innerHTML='⋎'

    div4.style.display="none"
}
f6.onclick=()=>{
    f6.innerHTML='⋏'
    div4.style.display="block"    
  }

  p5.onclick=()=>{
    f7.innerHTML='⋎'
    div5.style.display="none"
}
f7.onclick=()=>{
        f2.innerHTML='⋏'

    div5.style.display="block"    
  }