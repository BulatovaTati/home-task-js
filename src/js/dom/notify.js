import { Notify } from 'notiflix/build/notiflix-notify-aio';

function onErrorSearch() {
  Notify.failure(
    `Sorry, there are no images matching your search query. Please try again`
  );
}
function onEndSearchPic() {
  Notify.failure(`We're sorry, but you've reached the end of search results`);
}

function onSuccessSearch(data) {
  Notify.success(`Hooray! We found ${data.total} images.`);
}

export { onSuccessSearch, onEndSearchPic, onErrorSearch };
