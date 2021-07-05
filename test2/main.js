const URI = 'https://jsonplaceholder.typicode.com/posts';

const fetchGet = async () => {
    let res = await fetch (URI);
    let result = await res.json();
    return result;    
}

function CheckOdd (result){
    return (result.id % 2) == 1;
} 

const getArray = result => result.filter(CheckOdd);
  
const fetchOddPosts = () => {
    fetchGet().then(result => getArray(result))
    .then(response => console.log(response));   
}

fetchOddPosts();
