// import str from './data.js';


const parent = document.getElementById("parent")
const child = document.getElementById("children")
const grand = document.getElementById("grand")


parent.addEventListener('click', (e) => {
    console.log('PArent22')
   console.log(e.capture) 
}, {capture:true}
);

child.addEventListener('click', (e) => {
    // e.stopPropagation()
    console.log('Child')
})

grand.addEventListener('click', () => {
    
    console.log('Grand')
}) 



// parent.addEventListener('click', () => {
//     console.log('parent')
// })