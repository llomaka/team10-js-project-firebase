import getRefs from './get-refs';

const REFS = getRefs();

export default function onLoaderVisible() {
    REFS.loader.classList.remove('visually-hidden');
}