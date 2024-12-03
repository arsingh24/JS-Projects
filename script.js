const accessKey =`SH3ufvCql_0_qCDf9SBoqEHOQ1dx7fCzmZwezSLfIr4`
const searchForm = document.getElementById("search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more");
const Btn = document.getElementById("btn");


let keyword='';
let page =1;


async function searchImages() {
    keyword =searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}
    &query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imglink = document.createElement('a');
        imglink.href = result.links.html;
        imglink.target ="_blank"

        imglink.appendChild(image);
        searchResult.appendChild(imglink);

        console.log(result)
    })

    showMoreBtn.style.display="block";
}

Btn.addEventListener("click",()=>{
    // e.preventDefault();
    page=1;
    searchImages();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})