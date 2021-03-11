/*
de service worker wordt geinstalled en wordt dan actief
(dit activeren gebeurt automatisch na installeren, maar bij veranderen van versie, moeten we zorgen
dat het activatie moment geactiveerd wordt.)



*/
const staticcacheName = 'site-static-v9';

const dynamicCache = 'site-dynamic-v9';

// "/" == index.html (het kan dit zijn als zowel index.html)

//shell-assets zijn je shell pagina's
//de script pagina's moeten ook, anders worden de css en javascript niet ingeladen
const shellassets = ["/","/index.html","/pages/login.html","/pages/register.html",

"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
"https://fonts.googleapis.com/icon?family=Material+Icons",
"/styles/default.css",
"/styles/mobile.css",
"/scripts/app.js",
"/images/UZGent Banner.png",
"/images/icons/back-arrow.png",
'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap',
'https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap',
"https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jsGyNPYZvgw.woff2",
"https://fonts.gstatic.com/s/ubuntu/v15/4iCs6KVjbNBYlgoKfw72nU6AFw.woff2",
"https://fonts.gstatic.com/s/ubuntu/v15/4iCv6KVjbNBYlgoCjC3jsGyN.woff2",

"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
"https://fonts.gstatic.com/s/materialicons/v78/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
"https://fonts.gstatic.com/s/materialicons/v81/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
"/manifest.json",
"/images/icons_app/UZ-icon-144x144.png",
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
"/pages/offline.html",
"/pages/menu-offline.html"

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
    //we cachen de statics, het skelet/ belangrijkste pagina's van onze app
    //Dit is de App Shell
    );
    


});

//luister activatie

self.addEventListener('activate', event=>{
    //console.log("Service worker is activated: ");
    //hier gaan we de oude cache wissen
    //dit is het moeilijkste stuk van caching, meer info: https://www.youtube.com/watch?v=g9LfyCZjeKI&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=17&ab_channel=TheNetNinja

    //wat zijn de keys?
    //keys= de namen van de caches
    event.waitUntil(
        caches.keys().then(keys=>{
            //console.log(keys);
            return Promise.all(keys
                .filter(key=>key !== staticcacheName && key !== dynamicCache) //we wissen de oude caches verschillend van staticcacheName
                .map(key=>caches.delete(key))
                );
        })
    )



});

//FetchHandler:
self.addEventListener('fetch', event=>{
    //we luisteren naar een fetch event
    //console.log('Service worker fetch: ',event);
    //deze fetch is de laatste requirement voor de automatisch install banner
    
    //vergelijken of de request in de cache zit of moet halen uit server
    //offline: uit cache
    
    //kijk in de caches en vergelijk of er request overeenkomt
    //cacheRes = response die precached is (in site-static)
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request) //als cahceREs leeg is, doe gewoon de fetch request
            .then(fetchRes => { //we nemen de response (die we krijgen omdat deze nog niet in de cache stond)
                return caches.open(dynamicCache).then(cache => { //we steken in de nieuwe 
                    cache.put(event.request.url, fetchRes.clone()); //clone van de response in de cache
                    return fetchRes;
                    //als we ooit offline zijn vindt hij de gecachde pagina mogelijk terug in de caches (dynamic/static cache)
                })
            })

        }).catch(()=> {
            //filteren op html pages
            //DIT ZIJN DE CONDITIONAL FALLBACKS
            //we kunnen checken op images en zo zodat we een error png teruggeven
        if(event.request.url.indexOf('.html') > -1){
            return caches.match('/pages/offline.html');
        }
        }) //error opvangen als file ophalen gefailed is(= file is niet in cache en we vinden niet op server/offline)
    );
    



});