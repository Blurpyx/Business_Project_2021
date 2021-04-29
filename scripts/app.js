window.addEventListener("load",function(){

    //checken of er een serviceworker aanwezig is
    if('serviceWorker in navigator')
    {
        navigator.serviceWorker.register('../sw.js')
        .then(reg =>{
            console.log("Serviceworker is registered: ");
            console.log(reg)
        })

        .catch(err=>console.log(err));
    }
    else
        alert("No service worker available.")
})