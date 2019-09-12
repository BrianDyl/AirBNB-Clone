
// select the floating button in the ui
const floatingBTN = document.querySelector('.footerBtn');

// attach an event listener
floatingBTN.addEventListener('click', e => {
    // select footer
const footer = document.querySelector('.footer');
    // check if the class (active) exists?
    if(footer.classList.contains('active')){
        //remove the class
       footer.classList.remove('active');
       // retuen the original text
       e.target.innerText = 'Terms, Privacy, Currency & More';
    } else { 
    // add active class to footer
    footer.classList.add('active');

    // add the close text X
    e.target.innerText = 'X Close'
}
 
})
