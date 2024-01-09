const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click', function(){
    alert('Sabía que íbas a decir que SI, TE AMO Esposa Mía')
})

const nobtn = document.querySelector('#nobtn')

nobtn.addEventListener('mouseover', function(){
    const randomX =parseInt(Math.random()*100)
    const randomY =parseInt(Math.random()*100)

    nobtn.style.setProperty('top', randomX+'%')
    nobtn.style.setProperty('left', randomY+'%') 

    nobtn.Style.setProperty('transform', 'translate(-${randomX}%, -${randomY}%)');
})