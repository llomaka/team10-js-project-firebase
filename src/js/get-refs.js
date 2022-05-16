/*  Создал Богдан тим-лид

  Тут храним все рефы. Импортируете куда вам нужно, добавляйте рефы если нужно еще,
  делаете себе в файле переменную

      const refs = getRefs();

  и далее используете по стандарту refs.searchBtnRef.addEveventListener()   и тд

*/

export default function getRefs() {
  return {
    // рефи header --- Home ---- My library
    // ------ HOME --------
    headerRef: document.querySelector('.header'),
    logoRef: document.querySelector('.logo__link'),
    headerFormRef: document.querySelector('[data-form-type="search-form"]'),
    searchBtnRef: document.querySelector('[data-action="search-button"]'),
    homeRef: document.querySelector('[data-link="home"]'),
    myLibraryRef: document.querySelector('[data-link="my-library"]'),
    errorWindowRef: document.querySelector('[data-errorWindow="errorWindow"]'),
    changeTheme: document.querySelector('.dark-mode'),
    themeIcon: document.querySelector('.dark-mode__theme-icon'),
    //  ------- MY LIBRARY -------
    libButtons: document.querySelector('.library-btn__item'),
    libWatchedBtn: document.querySelector('.watched-btn'),
    libQueueBtn: document.querySelector('.queue-btn'),
    // рефа тегу <main> з index.html
    mainRef: document.querySelector('main'),
    filterList: document.querySelector('.filter__list'),
    filterBtnDaily: document.querySelector('[data-action="day"]'),
    filterBtnWeekly: document.querySelector('[data-action="week"]'),
    filterBtnTopRated: document.querySelector('[data-action="topRated"]'),
    filterBtnUpcoming: document.querySelector('[data-action="upcoming"]'),
    filterBtnNowPlaying: document.querySelector('[data-action="nowPlaying"]'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    movieItemRef: document.querySelectorAll('.movie__item'),
    // footer related refs // рефи з футера
    footerModalBackdrop: document.querySelector('[data-footerModalBackdrop]'),
    studentsModal: document.querySelector('[data-studentsModal]'),
    footerCloseBtnRef: document.querySelector('[data-action="footerCloseBtn"]'),
    // посилання кнопок подробиць фільму
    addToWatched: document.querySelector('.film__watched'),
    addToQueue: document.querySelector('.film__queue'),
    // ключ для збереження фільмів у локальному сховищі
    movieKey: 'currentFilms',
    // рефа до кнопки наверх
    goTopBtn: document.querySelector('.btn-up'),
    // галерея фильму
    galleryList: document.querySelector('[data-action="galleryList"]'),
    filmModalBackdrop: document.querySelector('[data-filmModalBackdrop]'),
    filmModalContainer: document.querySelector('[data-action="filmModalContainer"]'),
    // рефа pagination
    paginationContainer: document.querySelector('#pagination2'),
    // рефа модалки фільму
    filmModalCloseBtn: document.querySelector('.film__modal-closeBtn'),
  };
}
