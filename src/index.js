console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', ()=> {
fetch('https://dog.ceo/api/breeds/image/random/4').then( res => res.json()).then( data => data.message.forEach((x) => {
   let img = document.createElement('img') 
   img.src = x
document.querySelector('#dog-image-container').append(img);
fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json()).then(data => ()=>{})


}))


}) 

