//DAO MODEL

function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query("select * from news order by date desc", callback);
};

Noticias.prototype.getNews = function(id, callback){
    this._connection.query(`select * from news where id = ${id}`, callback);
};

Noticias.prototype.setNews = function(data, callback){
    this._connection.query(`insert into news (title, content, resume, author, news_date) values (
                            '${data.title}',
                            '${data.content}',
                            '${data.resume}',
                            '${data.author}',
                            '${data.news_date}')`, callback);
};

Noticias.prototype.getLastNews = function(number, callback){
    this._connection.query(`select * from news order by date desc limit ${number}`, callback);
}

module.exports = function(){
    return Noticias;
};