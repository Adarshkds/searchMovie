const box = document.querySelector('.box');

const arrName = [];

document.addEventListener('DOMContentLoaded', async (e) => {
    const arr = [`Avengers`, `batman`, `morning`, `knight`, `hero`, `king`, `don`,`love`,`god`,`psycho`,`loss`,`boss`]
    for (let i = 0; i < arr.length; i++) {
        const movies = await fetchAPI(arr[i]);
        movieList(movies);
    }
    // console.log(arrName);

    callSearch();
})

async function fetchAPI(data) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);
    const finalRes = await res.json();
    // console.log(finalRes);
    return finalRes;
}

function movieList(movies) {
    movies.forEach(element => {
        const movieName = element.show.name;
        const item = document.createElement('div');
        item.classList.add('item');

        let url = element.show.image;
        if (url != null && url.original != null) {
            const img = document.createElement('img');
            img.setAttribute('src', url.medium);
            item.append(img);

            const name = document.createElement('div');
            name.classList.add('name');
            name.innerHTML = movieName;
            item.append(name);
            // item.classList.add('hide');

            box.append(item);
            arrName.push(movieName.toLowerCase());
        }
    });
}
