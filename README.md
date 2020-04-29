# 1920-b1-fe-JonasHaenebalcke
1920-b1-fe-JonasHaenebalcke created by GitHub Classroom

# QuoteApp

## Extra technologie
De extra technologie die geïmplementeerd is, is PWA (Progressive Web Application)
Dit betekent dat de app offline ook beschikbaar is (in beperkte mate) en downloadbaar is voor een mobiele applicatie.

Om dit uit te testen moet je enkele stappen ondernemen:

1. Installeer een google extensie: (Moesif Orign & CORS Changer)[https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en] en zet deze rechtsbovenaan op "ON"
2. Controleer of de backend beschikbaar is
3. open de terminal in de frontend
4. voer volgende commando's in:
⋅⋅* cd quoteapp
⋅⋅* ng build --prod
⋅⋅* cd dist
⋅⋅* cd quoteapp
⋅⋅* http-server -o
5. rechtermuisknop -> inspecteren
6. menu bovenaan -> audits
7. klik op generate report (zorg dat Progressive Web App zeker aangevinkt is!)
8. klik op Progressive Web App


## Normale gevallen
Om deze webapplicatie op een normale manier op te starten moet je volgende stappen ondernemen:

1. controleer of de backend beschikbaar is
2. open de terminal in de frontend
3. Voer volgende commando's in:
⋅⋅* cd quoteapp
⋅⋅* npm start

De webapp hoort nu op te starten en te openen in Google Chrome

Zonder in te loggen kan je al veel van de applicatie zien
Het scherm dat je als eerste ziet is een overzicht van alle quotes, links kan je navigeren naar de auteurs van de quotes.
Als je de opmerkingen van een quote wilt zien moet je het opmerkingen icon klikken.
Dit zal de comments weergeven, samen met de gebruikersnaam van de persoon die de comment gepost heeft.

Om een comment te plaatsen moet je inloggen, dit doe je rechtsbovenaan, je kan de gegevens (jonidinges, wachtwoord) gebruiken om in te loggen, of zelf een account maken.
Als je ingelogd bent, zal je ook opmerken dat je quotes kan toevoegen. Je kan kiezen uit alle auteurs die beschikbaar zijn binnen de applicatie.
Indien je een quote wilt toevoegen van iemand die niet in de databank zit, dan kan je de auteur toevoegen.

(checklist)[https://imgur.com/4jZnTfC]
