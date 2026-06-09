

const existing_articles = {
    "Dinâmica":{
        "Básico de dinâmica":"",
        "Movimento":"",
        "Gravidade":"",
        "Leis de Newton":"",
    },
};



function createArticleList(){
    var targetElement = document.getElementById("explorador-de-artigos");

    for (const [topic, article] of Object.entries(existing_articles)){
        console.log(topic);
        console.log(article);

    }
}

createArticleList()