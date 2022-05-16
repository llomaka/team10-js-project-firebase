import 'tui-pagination/dist/tui-pagination.css';
import onDarkMode from './js/darkTheme';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import onScroll from './js/scrollUpBtn';
// import onLoaderHidden from './js/onLoaderHidden';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';
import './sass/main.scss';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAz5NnVTxsmxCeYZqtfnfTHMShB31Yek1s",
  authDomain: "fson43-team10-js-project.firebaseapp.com",
  projectId: "fson43-team10-js-project",
  storageBucket: "fson43-team10-js-project.appspot.com",
  messagingSenderId: "807239686844",
  appId: "1:807239686844:web:ed9e9926c30813e9faceb9",
  measurementId: "G-HJ9V9VEX0X"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});
const currentFilmStorage = collection(db, 'currentFilms');

const refs = getRefs();

saveGenresToLocalStorage();
onLoaderVisible();
renderMainPage();

onScroll();
refs.filterList.addEventListener('click', onFilterClick);

function onFilterClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const currentBtn = event.target;
  const previousBtn = refs.filterList.querySelector('.filter__btn--active');
  const mode = event.target.dataset.action;
  renderMainPage(mode);
  changeActiveButton(currentBtn, previousBtn);
}

function changeActiveButton(current, previous) {
  previous.classList.remove('filter__btn--active');
  current.classList.add('filter__btn--active');
}
