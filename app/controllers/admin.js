module.exports.formulario_add_noticia = function(app, req, res){
    res.render('admin/form_add_noticia', {validation: null, news: {}});
};

module.exports.noticias_salvar = function(app, req, res){
    let data = req.body;

    req.assert('title', 'Titulo é Obrigatorio').notEmpty();
    req.assert('resume', 'Resumo é Obrigatorio').notEmpty();
    req.assert('resume', 'Resumo da noticia deve ter entre 10 a 100 caracteres').len(10,100);
    req.assert('author', 'Autor é Obrigatorio').notEmpty();
    req.assert('news_date', 'A data da noticia é Obrigatoria').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('content', 'O conteudo da noticia é Obrigatorio').notEmpty();

    let errors = req.validationErrors();

    if(errors){
        console.log(errors);
        res.render("admin/form_add_noticia", {validation: errors, news: data});
        return;
    }

    connection = app.config.db();

    let Noticias = new app.app.models.Noticias(connection);

    Noticias.setNews(data, function(error, result){
        res.redirect('/noticias');
    });
};