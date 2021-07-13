const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos?client_id=bppMp0tY0Dhju0fRCrKti7FFGgLcTGcHTA8ngpviabQ'

const value = 'nature';
//
// fetch(`${UNSPLASH_API_URL}&query=${value}`)

const fetchPictures = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fetch(`${UNSPLASH_API_URL}&query=${value}`))
        }, 1000)
    });
}
