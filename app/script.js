const accessKey = "zJMr96qlTsh1JnSy251XYTJjdPsb40s4ev1qI853EG4";


let searchForm = document.querySelector('.search');
let searchBox = document.getElementById('search-box');
let searchResult = document.getElementById('search-result');
let fullImage = document.querySelectorAll('.full-img');

let keyword = " ";

let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?${page}=1&query=${keyword}&client_id=${accessKey}&pages=120`;


    const response = await fetch(url);
    const data = await response.json();


    if(page === 1)
    {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result)=> {
        const image = document.createElement('img');
        image.src = result.urls.full;
        const imageLink = document.createElement("a");
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        // fullImage.appendChild(imageLink);

    })

    console.log("your data is is ", data);


}

searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
});



