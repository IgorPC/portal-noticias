module.exports.index = function(app, req, res){
    let connection = app.config.db();
    let Noticias = new app.app.models.Noticias(connection);

    Noticias.getLastNews(5, function(error, result){
        res.render('home/index', {news: result});
    }); 
};