import ApiService from './js/apiService';
import galleryItemMarkup from './templates/gallery-list-item.hbs';
// import { onClickImage } from './js/modal-img';
import createModal from './js/modal'
import '../src/main.css';


const ref = {
    searchForm: document.querySelector('#search-form'),
    formInput: document.querySelector('.search-form__input'),
    searchFormButton: document.querySelector('.search-form__button'),
    galleryList: document.querySelector('.gallery'),
    sentinel: document.querySelector('#sentinel'),
};

ref.searchForm.addEventListener('submit', onSearch);
ref.galleryList.addEventListener('click', handleOpenModal);

const apiService = new ApiService();

function onSearch(event) {
    event.preventDefault();
    apiService.query = event.currentTarget.elements.query.value;
    if (apiService.query === '') {
        return alert('Введите запрос ');
    };

    apiService.resetPage();
    clearHitsContanier();
    apiService.fetchHits().then(renderCards);


};


function renderCards(hits) {
    ref.galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup(hits))
};
function clearHitsContanier() {
    ref.galleryList.innerHTML = '';
};




const onEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && apiService.query !== '') {
            apiService.fetchHits().then(renderCards);
        }
    });
};

const options = {
    rootMargin: '150px'
};

const observer = new IntersectionObserver(onEntry, options);


observer.observe(sentinel);



function handleOpenModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const largeImageURL = event.target.dataset.sourse;
    createModal(largeImageURL);

}