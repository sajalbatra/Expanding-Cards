const pan = document.querySelectorAll('.panel')

pan.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    pan.forEach(panel => {
        panel.classList.remove('active')
    })
}