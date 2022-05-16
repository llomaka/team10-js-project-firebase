import 'tui-pagination/dist/tui-pagination.css';
import getRefs from './js/get-refs';
import saveGenresToLocalStorage from './js/saveGenresToLocalStorage';
import onScroll from './js/scrollUpBtn';
import onLoaderVisible from './js/onLoaderVisible';
import renderMainPage from './js/renderMainPage';
import './sass/main.scss';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, connectAuthEmulator, sign } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import {
  hideLoginError,
  showLoginState,
  showLoginForm,
  showApp,
  showLoginError,
  btnLogin,
  btnSignup,
  btnLogout
} from './js/ui';


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
const currentFilmStorage = collection(db, 'currentFilms');
// Login using email/password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  // step 1: try doing this w/o error handling, and then add try/catch
  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

  // step 2: add error handling
  // try {
  //   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  // }
  // catch(error) {
  //   console.log(`There was an error: ${error}`)
  //   showLoginError(error)
  // }
}

// Create new account using email/password
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  }
  catch(error) {
    console.log(`There was an error: ${error}`);
    showLoginError(error);
  }
}

// Monitor auth state
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
      showLoginState(user);

      hideLoginError();
      hideLinkError();
    }
    else {
      showLoginForm()
      lblAuthState.innerHTML = `You're not logged in.`;
    }
  })
}

// Log out
const logout = async () => {
  await signOut(auth);
}

btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);

connectAuthEmulator(auth, "https://localhost:1236");
monitorAuthState();

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
