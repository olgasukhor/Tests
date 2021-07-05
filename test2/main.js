const URI = 'https://jsonplaceholder.typicode.com/posts';

const fetchGet = async () => {
    let res = await fetch (URI);
    let result = await res.json();
    return result;
    
}
// function CheckOdd (){
//     return (result.id % 2) == 1;
// } //хотела вынести фильтр в отдельную функцию, но тут завтык. так не работает.
const getArray = result => result.filter(result => (result.id % 2) == 1);


  
const fetchOddPosts = () => {
    fetchGet().then(result => getArray(result))
    .then(response => console.log(response));   
}

fetchOddPosts();
