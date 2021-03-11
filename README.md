# Web App voor UZ Gent
## Auteurs: Tytgat Tommy en Vergote Niels

# Niels TODO:

- ~~Precaching Assets~~
    - Alles shellassests (index.html, login.html en register.html laden deftig in)
- ~~Cache Versioning (Static Caches)~~

- ~~Dynamic Caching~~ (about.html en contact.html)
- Offline fallback page
- Conditional Fallbacks
- Limiting cache size
- Database???!!!

    ##Hoe database doen?


# TODO:
- Mr. Buysschaert vragen hoe we images uploaden vanop lokaal device
- Kijken of we een API moeten schrijven voor (bv) de patiënten en personeel op te halen voor een offline lijst van de personen op de afdeling
- Aanpassingen pagina's:
    - Op hoofdmenu (/pages/menu.html) links aanpassen zodat ook het icoon (dus volledige div) als knop telt
- (In Development - branch: remake) Kijken voor aparte stylesheet te gebruiken voor pc-weergave => standaard gsm-weergave in style.css
- Proberen om MaterializeCSS in cache te zetten voor rappere debug's
- (In Development - branch: remake) Algemene stylesheets
    - (In Development - branch: remake) Mobile
    - (In Development - branch: remake) Default
    - Desktop
- (In Development - branch: remake) Complexer menu maken


# Long-term TODO:
- Offline werking dmv cache - service worker (20210301 - Web Apps)
    - History laden in cache => bezochte pagina's in cache laden zodat deze later makkelijker laden
        - Hoe pagina's excluden?


# Interesting sites:
- http://detectmobilebrowsers.com/
- https://www.tutorialrepublic.com/css-tutorial/css-media-types.php
- https://europa.eu/youreurope/business/running-business/intellectual-property/copyright/index_en.htm

- Caching
    - https://developer.mozilla.org/nl/docs/Web/HTTP/Status#successful_responses
    - Toevoegen
        - https://developer.mozilla.org/en-US/docs/Web/API/Cache/add
        - https://developer.mozilla.org/en-US/docs/Web/API/Cache/put
    - Opzoeken in cache
        - https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/match
        - https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open
    - Cache aanmaken
        - https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/caches
    - Fetch
        - https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent
        - Request: https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request
        - Respond: https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
    




# Templates:
- Commits:
    - Readme Update: '(date) yyyymmdd (bv 20210301) readme update' => Voor bv interessante dingen in de les of uitgevoerde dingen in de Business Project les