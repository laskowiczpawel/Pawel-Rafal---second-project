const leftArrow = document.querySelector('.section-aboutus-content-frame-header-arrows-leftarrow');
const rightArrow = document.querySelector('.section-aboutus-content-frame-header-arrows-rightarrow');
let fisrtPhoto = document.querySelector('.section-aboutus-content-carousel-photo img')
let secondPhoto = document.querySelector('.section-aboutus-content-carousel-secondphoto img')

let title = document.querySelector('.section-aboutus-content-frame-header-title')
let text = document.querySelector('.section-aboutus-content-frame-text')

let titles = ['Moon', 'Lbortis']
let texts = 
['Sed id tellus in risus pre tium imperdiet eu lobortis dolor. Sed pellentesque, urna ac viverra lacinia, erat mauris venenatis purus, mollis egestas urna purus ac ex. Aenean nunc sem, lobortis at elit non, lobortis laoreet nibh. Maecenas at mi ipsum. Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim. Sed eu vestibulum elit. Donec ut libero non.', 
'Pre id tellus in risus pre tium imperdiet eu lobortis dolor. Sed pellentesque, urna ac viverra lacinia, erat mauris venenatis purus, mollis egestas urna purus ac ex. Aenean nunc sem, lobortis at elit non, lobortis laoreet nibh. Maecenas at mi ipsum. Quisque tempor, ligula pharetra luctus elementum, arcu nisl suscipit ante, pharetra commodo dui est et enim. Sed eu vestibulum elit. Donec ut libero non.']

title.innerHTML = titles[0]
text.innerHTML = texts[0]

const slider = document.querySelector('.slider-container');

leftArrow.addEventListener('click', changePhoto)
rightArrow.addEventListener('click', changePhoto)

let i = 0;

function changePhoto() {
    ++i

    if (i%2 == 0)
		return secondPhoto.style.opacity = '1', title.innerHTML = titles[0], text.innerHTML = texts[0]
	else
		return secondPhoto.style.opacity = '0', title.innerHTML = titles[1], text.innerHTML = texts[1]

    
}
/*Scrollowanie */
 
const nav = document.querySelector(".navigation_bar");
const sectionOne = document.querySelector(".intro");

const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add("navigation_bar_after_scroll")
        } else {
            nav.classList.remove("navigation_bar_after_scroll")
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
