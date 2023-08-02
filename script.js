const newsList = document.querySelector(".news-list");

function getData(url)
{
    fetch(url)
    .then( res => res.json() )
    .then( data => createNews(data.articles) )
    .catch( err => console.log(err) )
}

getData("https://newsapi.org/v2/top-headlines?country=tr&apiKey=YOURAPİKEY");

function createNews(data)
{   
    for(let i = 0; i < 20; i++)
    {   

        let newsItem = document.createElement("li");
        newsItem.classList.add("news-item");
        
        let newsBody = document.createElement("div");
        newsBody.classList.add("news-body");

        let newsTitle = document.createElement("strong");
        newsTitle.classList.add("news-title");

        let newsButton = document.createElement("a");
        newsButton.classList.add("news-button");
        newsButton.target = "_blank";

        newsList.appendChild(newsItem);
        newsItem.appendChild(newsBody)
        newsItem.appendChild(newsButton);
        newsButton.appendChild(newsTitle);

        const maxLength = 120;
        const title = data[i].title.length > maxLength ? data[i].title.substring(0, maxLength) + "..." : data[i].title;
    
        newsTitle.innerHTML = title;
        newsButton.href = data[i].url;
    }
}
