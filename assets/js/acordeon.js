
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) =>{
    trigger.addEventListener('click', (e)=>{
        const acordeon = trigger.parentElement   /// aqui estamos pegando o pao do botao o acordeon
        const isOpen =  acordeon.classList.contains('open')

        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
    //console.log('showww'))
})












