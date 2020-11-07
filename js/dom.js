// COMPONENTES JS
const selectF = document.querySelectorAll('select');
const modalT = document.querySelectorAll('.modal');


// BOTONES MODAL
const btn_acept = document.querySelector('#acept-terms');
const btn_cancel = document.querySelector('#cancel-terms');


// FORMULARIO
const formulario = document.querySelector('#formNewsletter');
const fr_name = document.querySelector('#fr_name');
const fr_email = document.querySelector('#fr_email');
const news_option = document.getElementsByName("news_option");
const fr_city = document.querySelector('#fr_city');
const fr_offers = document.querySelector('#fr_offers');
const fr_terms = document.querySelector('#fr_terms');


const dom_components = {
    selectF,
    modalT,
    btn_acept,
    btn_cancel
};

const form_components = {
    formulario,
    fr_name,
    fr_email,
    news_option,
    fr_city,
    fr_offers,
    fr_terms
}
    
export { dom_components , form_components }