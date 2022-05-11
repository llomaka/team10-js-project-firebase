import './sass/main.scss';
import onDarkMode from './js/darkTheme';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import renderTrending from './js/renderTrending';
import fetchPopularMovies from './js/fetchPopularMovies';
import addTestWatchedQueue from './js/addTestWatchedQueue';
import addDataToLocalStorage from './js/addDataToLocalStorage';
import onScroll from './js/scrollUpBtn';
import renderingPlaceholder from './js/renderingPlaceholder';

import { pagination, paginationSettings } from './js/pagination';
import 'tui-pagination/dist/tui-pagination.css';

import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';

const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

// addTestWatchedQueue();

onScroll();

///------- пока не удаляйте, это теперь переехало в renderMainPage.js ----------
// fetchPopularMovies(paginationSettings.startPage)
//   .then(response => {
//     const totalItems = response.total_results;
//     const page = response.page;
//     paginationSettings.searchType = 'popular';
//     pagination({ totalItems, page });

//     renderTrending(refs.gallery, response.results);

//     renderingPlaceholder();

//     addDataToLocalStorage(refs.movieKey, response);

//     onLoaderHidden();
//   })
//   .catch(error => console.log(error));
