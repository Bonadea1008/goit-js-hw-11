import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ApiService from './js/API-service';
import renderCard from './js/renderCard';

const apiService = new ApiService();

refs.loadMore.style.display = 'none';

refs.searchForm.addEventListener('submit', onSearchQuery);
refs.loadMoreBtn.addEventListener('click', onLoadMoreSearch);

function onSearchQuery(e) {
  e.preventDefault();

  apiService.query = e.currentTarget.elements.searchQuery.value;
  apiService.resetPage();
  apiService.fetchImages();
  renderCard();
  // refs.searchBtn.disabled = true;
}

function onLoadMoreSearch(e) {
  apiService.fetchImages();
  apiService.incrementPage();
}
// Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:

// У відповіді буде масив зображень, що задовольнили критерії параметрів запиту. Кожне зображення описується об'єктом, з якого тобі цікаві тільки наступні властивості:

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
// Якщо бекенд повертає порожній масив, значить нічого підходящого не було знайдено. У такому разі показуй повідомлення з текстом "Sorry, there are no images matching your search query. Please try again.". Для повідомлень використовуй бібліотеку notiflix.

/* <div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>; */
