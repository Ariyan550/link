let html =document.querySelector('html')
let btn =document.getElementById('btn')
let link =document.querySelectorAll('.links')
btn.onclick=()=>{
    html.classList.toggle('dark')
    if(html.classList.contains('dark')){
        btn.innerHTML='Dark'
    }else{
        btn.innerHTML='Light'
    }
}

let popLink =document.querySelector('.pop')
let pop =document.querySelector('.popup')
let close =document.getElementById('close')  

link.forEach((curEle)=>{
    curEle.addEventListener('click',()=>{
        let data =curEle.getAttribute('data-target')
        popLink.href=data
        pop.classList.add('active');
    })
})


close.addEventListener('click',()=>{
    pop.classList.remove('active');
    
})
