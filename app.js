//turn page when click the >/< button
let pageturnbtn = document.querySelectorAll('.nextprev-btn')

pageturnbtn.forEach((e, index) => {
    // onclick aik function h
    e.onclick = () => {
        let pageturnId = e.getAttribute('data-page');
        let pageturn = document.getElementById(pageturnId)

        if (pageturn.classList.contains('turn')) {
            pageturn.classList.remove('turn')
            setTimeout(() => {
                pageturn.style.zIndex = 20 - index
            }, 500);
        }
        else {
            pageturn.classList.add('turn')
            setTimeout(() => {
                pageturn.style.zIndex = 20 + index
            }, 500);
        }
    }
})


//page 0 wala contect me button when click ->page 6
let page = document.querySelectorAll('.book-page.page-right')
let contectMeBtn = document.querySelector('.btn.Contact-me')

contectMeBtn.onclick = () => {
    page.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index
            }, 500);


        }, (index + 1) * 200 + 100);
    })
}

// reverse to profile page function
let totalpage = page.length;
let pageNumber = 0;

function reversePage() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpage - 1;
    }
}
//back profile when click
let backProfileBtn = document.querySelector('.back-profile');
// let backprofilebtn=document.

backProfileBtn.onclick = () => {
    page.forEach((_, index) => {
        setTimeout(() => {
            reversePage()
            page[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reversePage()
                page[pageNumber].style.zIndex = 10 + index
            }, 500);


        }, (index + 1) * 200 + 100)
    })
}


//openeing animation line 48 and 68 css

let coverRight = document.querySelector('.cover.cover-right')
let pageLeft = document.querySelector('.book-page.page-left')


//openeing animation('cover-right animation')
setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100);


setTimeout(() => {
    coverRight.style.zIndex = -1
}, 2800);

//openeing animation('page left or profile page animation')

setTimeout(() => {
    pageLeft.style.zIndex = 20
}, 3200);



//opening animation(all page right side pr show )
page.forEach((_, index) => {
    setTimeout(() => {
        reversePage()
        page[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reversePage()
            page[pageNumber].style.zIndex = 10 + index
        }, 500);


    }, (index + 1) * 200 + 2100)
})

//typed animation
let title = document.querySelector('.typing')
let name = "Web Developer"

let indexOfType = 1;

const typeWriter = () => {
    let new_title = name.slice(0, indexOfType);
    title.innerHTML = new_title;
    indexOfType > name.length ? indexOfType = 1 : indexOfType++
    setTimeout(() => {
        typeWriter()
    }, 200);
}
typeWriter()


// change mode

let modebtn = document.querySelector('.mode')
// modebtn.addEventListener('click', () => {
//     document.body.classList.add('dark-mode')
// })

const body = document.body;
const isDarkMode = localStorage.getItem('darkMode');
let i = document.querySelector('.mode .bx')
i.classList.add('bxs-moon')

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        let i = document.querySelector('.mode .bx')
        i.classList.add('bx-sun')
        i.classList.remove('bxs-moon')

    } else {
        localStorage.setItem('darkMode', 'disabled');
        let i = document.querySelector('.mode .bx')
        i.classList.add('bxs-moon')
        i.classList.remove('bx-sun')
    }
}
if (isDarkMode === 'enabled') {
    toggleDarkMode();
}
modebtn.addEventListener('click', toggleDarkMode);
