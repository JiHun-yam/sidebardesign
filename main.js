let modalSide = document.querySelector('.modal-side');
let addPost = document.getElementById('addPost');
addPost.addEventListener('click', function () {
    modalSide.classList.add('show')
})
window.addEventListener('click', (e) => {
    if (e.target == modalSide) {
        console.log('맞아요')
        modalSide.classList.remove('show')
    }
    console.log(e.target)

})