/*
de service worker wordt geinstalled en wordt dan actief
(dit activeren gebeurt automatisch na installeren, maar bij veranderen van versie, moeten we zorgen
dat het activatie moment geactiveerd wordt.)



*/
const staticcacheName = 'site-static';
// "/" == index.html (het kan dit zijn als zowel index.html)

//shell-assets zijn je shell pagina's
//de script pagina's moeten ook, anders worden de css en javascript niet ingeladen
const shellassets = ["/","index.html","login.html","register.html",
"/styles/styles.css",
"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
"https://fonts.googleapis.com/icon?family=Material+Icons",
"../styles/default.css",
"/styles/mobile.css",
"/scripts/app.js",

];


//install een service worker (als er een is)
self.addEventListener('install', event =>{
    console.log("Service worker has been installed");
    //console.log("Het event:", event);
    
    if(!('caches' in self))
        return;
    
    
    
    //install event duurt maar eventjes, zorg dat het cachen wordt gecompleet:
    // wait.until
    event.waitUntil(
        caches.open(staticcacheName).then(cache =>{
        //we adden alle urls in de local cache
        console.log("caching shell assets");
         return cache.addAll(shellassets);
        })
    );
    


});

//luister activatie

self.addEventListener('activate', event=>{
    //console.log("Service worker is activated: ");
});


self.addEventListener('fetch', event=>{
    //we luisteren naar een fetch event
    //console.log('Service worker fetch: ',event);
    //deze fetch is de laatste requirement voor de automatisch install banner

    //we cachen de statics, het skelet/ belangrijkste pagina's van onze app
    //Dit is de App Shell


});