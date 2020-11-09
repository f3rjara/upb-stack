import { dom_components, form_components } from './dom.js'
import { subscription }  from './subscription.js'
import { validateForm, option_news }  from './validateForm.js'
import { showMensaje } from './load.js'
import { load_data } from './load_data.js'
import { cancel_subs } from './cancel_subs.js'


const sendForm = ( () => { 
    document.getElementById('formNewsletter').addEventListener('submit', function(e) {     
        e.preventDefault();

        if ( validateForm() ) { 
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
            const respons = user.SaveUser();
            setTimeout(() => {                
                showMensaje( respons.msj , respons.color , 4000 );
                dom_components.col_form.classList.toggle("d-none");
                dom_components.col_user.classList.toggle("d-none");
            }, 1500);
            load_data()
            cancel_subs()
        } 
    });

})();


export { sendForm };