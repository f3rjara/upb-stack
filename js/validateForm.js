import { form_components } from './dom.js'
import { showMensaje } from './load.js'

let option_news = false;
const validateForm = ( () => {         
        for ( var i=0; i < form_components.news_option.length; i++ ) {
            if (form_components.news_option[i].checked == true) { 
                option_news =  form_components.news_option[i].value;
            }
        }

        if ( form_components.fr_name.value === "" ) { showMensaje( 'Debe digitar un nombre valido', 'red' , 4000 ); return false; }       
        else if ( form_components.fr_email.value === "" ) { showMensaje( 'Debe digitar un correo valido', 'red' , 4000 ); return false }
        else if ( option_news == false ) { showMensaje( 'Debes seleccionar un tipo de noticia', 'red' , 4000 );  return false }        
        else if ( form_components.fr_city.value === 'null' ) {  
            showMensaje( 'Debes seleccionar una ciudad', 'red' , 3000 );
            return false 
        }
        else if ( form_components.fr_terms.checked == false ) { return false }
        else { return true }
});

export { validateForm, option_news }