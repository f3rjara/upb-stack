function subscription ({ name, email, news, city, aceptOffers, aceptTerms }) {
    this.name = name;
    this.email = email;
    this.news = news;
    this.city = city;
    this.aceptOffers = aceptOffers;
    this.aceptTerms = aceptTerms;
};

subscription.prototype = { 
    ShowConf() {
        console.log("Sus configuraciones son las siguientes");
        console.log("Nombre: " + this.name );
        console.log("Correo: " + this.email );
        console.log("Tipo de Noticia: " + this.news );
        console.log("Ciudad: " + this.city );
        console.log("Acepta recibir ofertas?: " + this.aceptOffers );
        console.log("Acepta Terminos y condiciones?: " + this.aceptTerms );
        console.log("Fecha Subscripcion: " + (new Date().toISOString()) );
    }
}

export { subscription }