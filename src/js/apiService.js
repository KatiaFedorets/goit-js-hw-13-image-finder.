export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    };
    fetchHits() {
        const key = '19148526-868a45da76a9b21efd84117c7'
        const BASE_URL = 'https://pixabay.com/api/'
        const url = `${BASE_URL}?image_type = photo & orientation=horizontal&q = 
        ${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`

        return fetch(url)
            .then(response => response.json()).then(data => {
                this.page += 1;
                return data.hits;
            });
    };
    get query() {
        return this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
        console.log(newQuery);
    };
    resetPage() {
        this.page = 1;
    }


};


