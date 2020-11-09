import { dom_datasubs  } from './dom.js';

const load_data = (() => {
    if ( localStorage.getItem("usuario") !== null ) {
        const user =  JSON.parse(localStorage.getItem("usuario"));       
        dom_datasubs.sus_name.innerHTML = user.name;
        dom_datasubs.sus_email.innerHTML = user.email;
        if( user.news == "all-news" ) { dom_datasubs.sus_news.value = "Todas las noticias"; }
        else { dom_datasubs.sus_news.value = "Noticias de Tencología"  }        
        dom_datasubs.sus_city.value = user.city; 
        if( user.aceptOffers ) { dom_datasubs.sus_offers.value = 'SI'; }
        else  { dom_datasubs.sus_offers.value = 'NO'; }        
        var day = moment( user.date_create );
        dom_datasubs.sus_date.value = day.calendar();
    }
});

export { load_data }