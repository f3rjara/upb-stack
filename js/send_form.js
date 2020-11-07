import { form_components } from './dom.js'
import { subscription }  from './subscription.js'

function showMensaje ( msj , color , time )  {
    M.toast({
        html: msj,
        classes: color + ' darken-1 rounded',
        displayLength: time 
    });
}

const sendForm = ( () => { 
    document.getElementById('formNewsletter').addEventListener('submit', function(e) {     
        e.preventDefault();

        
        let option_news = false;
        for ( var i=0; i < form_components.news_option.length; i++ ) {
            if (form_components.news_option[i].checked == true) { 
                option_news =  form_components.news_option[i].value;
            }
        }

        if ( form_components.fr_name.value === "" ) { showMensaje( 'Debe digitar un nombre valido', 'red' , 4000 ); return false; }       
        if ( form_components.fr_email.value === "" ) { showMensaje( 'Debe digitar un correo valido', 'red' , 4000 ); return false }
        if ( option_news == false ) { showMensaje( 'Debes seleccionar un tipo de noticia', 'red' , 4000 );  return false }        
        if ( form_components.fr_city.value === 'null' ) {  
            showMensaje( 'Debes seleccionar una ciudad', 'red' , 4000 )
            var fr_city_input = document.querySelector('#input_select input');
            fr_city_input.click();
            return false 
        }
        if ( form_components.fr_offers.checked == false ) { return false }
        if ( form_components.fr_terms.checked == false ) { return false }

        const user = new subscription({
            name: form_components.fr_name.value,
            email: form_components.fr_email.value,
            news: option_news,
            city: form_components.fr_city.value,
            aceptOffers: form_components.fr_offers.checked,
            aceptTerms: form_components.fr_terms.checked
        });
        
        showMensaje( 'Te suscribiste con éxito!', 'green' , 5000 );
        form_components.formulario.reset();
        M.updateTextFields();

        user.ShowConf();
        
    });

})();


export { sendForm };