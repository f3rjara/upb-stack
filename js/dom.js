// COMPONENTES JS
const selectF = document.querySelectorAll('select');
const modalT = document.querySelectorAll('.modal');

// BOTONES MODAL
const btn_acept = document.querySelector('#acept-terms');
const btn_cancel = document.querySelector('#cancel-terms');

// ROWS CARDS 
const col_form = document.querySelector('#col_form');
const col_user = document.querySelector('#col_user');

// FORMULARIO
const formulario = document.querySelector('#formNewsletter');
const fr_name = document.querySelector('#fr_name');
const fr_email = document.querySelector('#fr_email');
const news_option = document.getElementsByName("news_option");
const fr_city = document.querySelector('#fr_city');
const fr_offers = document.querySelector('#fr_offers');
const fr_terms = document.querySelector('#fr_terms');

// FORMULARIO DATA USER
const sus_name = document.querySelector('#sus_name');
const sus_email = document.querySelector('#sus_email');
const sus_news = document.querySelector('#sus_news');
const sus_city = document.querySelector('#sus_city');
const sus_offers = document.querySelector('#sus_offers');
const sus_date = document.querySelector('#sus_date');
const sus_delete = document.querySelector('#sus_delete');

const dom_components = {
    selectF,
    modalT,
    btn_acept,
    btn_cancel,
    col_form,
    col_user
};

const form_components = {
    formulario,
    fr_name,
    fr_email,
    news_option,
    fr_city,
    fr_offers,
    fr_terms
};

const dom_datasubs = {
    sus_name,
    sus_email,
    sus_news,
    sus_city,
    sus_offers,
    sus_date,
    sus_delete
};

export { dom_components , form_components , dom_datasubs }