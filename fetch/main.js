but.addEventListener ("click", function() {
  getData()
});

function getData(){
  
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data=> console.log(JSON.stringify(data, 1, 1)))
  // .then(data=> console.log(data[0].title))
  // .then(data => document.getElementById('container').innerHTML=JSON.stringify(data, 1, 2));
  
  // draw =()=>{
  //   let out = '';
  // for(let i=0; i<=data.length; i++){
  //   out +=`<li>${data[i].title}</li>`;
  //   }
  //   document.querySelector('ul').innerHTML=out;
  // }  
  
}




  