const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos?client_id=bppMp0tY0Dhju0fRCrKti7FFGgLcTGcHTA8ngpviabQ'

const fetchPictures = (value) => {
    return new Promise(resolve => {
        resolve(fetch(`${UNSPLASH_API_URL}&query=${value}`))
    });
}
