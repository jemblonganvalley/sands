

let menuIcons = document.querySelector('.menuIcons')


const showMenu =  ()=>{

    let show = sessionStorage.getItem('show')
    
    if(!show){
        sessionStorage.setItem('show', true)
        let menuMobile = document.querySelector('.menuMobile')
        // menuMobile.style.display = `flex`
        menuMobile.style.transform = `translate(0,0)`
    }else{
        sessionStorage.removeItem('show')
        let menuMobile = document.querySelector('.menuMobile')
        menuMobile.style.transform = `translate(80vh,-100vw)`
    }
    
}