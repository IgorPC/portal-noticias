module.exports.noticia = function(app, req, res){
    connection = app.config.db();

    let id = (req.query).id;
    
    let Noticia = new app.app.models.Noticias(connection);

    Noticia.getNews(id, function(error, result){
        res.render('noticias/noticia', {news: result});
    });
};

module.exports.noticias = function(app, req, res){
    connection = app.config.db();

    let Noticias = new app.app.models.Noticias(connection);

    Noticias.getNoticias(function(error, result){
        res.render('noticias/noticias', {news: result});
    });  
};