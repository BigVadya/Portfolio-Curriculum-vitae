// swithTheme

let Theme = document.querySelector('.theme')

Theme.onclick = function() {
	let changeTheme = document.querySelector('.change-theme')
	let theme = document.querySelector('#theme');
	let changeIMG = document.querySelector('.bank-img');
	let iconImg = document.querySelector('.icon');


	
	if (theme.getAttribute('href') == 'CSS/Light-theme.css') {
		theme.href = 'CSS/Dark-theme.css'
		changeIMG.src = 'Img/black.jpg'
		changeTheme.textContent = 'Light'
		iconImg.src = 'Img/sun.png'
		
	} else {
		theme.href = 'CSS/Light-theme.css'
		changeIMG.src = 'Img/white.jpg'
		changeTheme.textContent = 'Dark'
		iconImg.src = 'Img/moon.png'
		
	}
}

//Anchor

const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault() 
    
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

//links

const links = document.querySelectorAll('.link');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
  
            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})



console.log('Have a nice day! P.S. From TheHandOfLord.')