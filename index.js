const key = '973fb380';
// http://www.omdbapi.com/?apikey=[yourkey]&

// AXIOS FETCH
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '973fb380',
            s: searchTerm
        }
    });

    if (response.data.Error) {
        return [];
    }
    return response.data.Search;
};
const input = document.querySelector('input');
const onInput = async event => {
    const movies = await fetchData(event.target.value);

    for (let movie of movies) {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}" />
        <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    };
};
input.addEventListener('input', debounce(onInput, 500));