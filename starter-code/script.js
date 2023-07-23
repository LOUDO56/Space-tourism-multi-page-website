const mobileNavContainer = document.querySelector('.mobile-nav-container');
const hamburgerIcon = document.getElementById('hamburger-icon');
const iconClose = document.getElementById('icon-close');

const toggleMobileNav = () => {
    mobileNavContainer.classList.toggle('is-active');
};

hamburgerIcon.addEventListener('click', toggleMobileNav);
iconClose.addEventListener('click', toggleMobileNav);

if(window.location.href.includes("index")){
    document.querySelector('.btn-explore').addEventListener('click', () => {
        window.location.href = "starter-code/page/destination.html";
    })
}



// -------- Destination Page -------- // 



async function fetchPlanetData(){
	let planetData;
	const res = await fetch('../data.json')
	planetData = await res.json()
	changePlanetInfo(planetData)
}

function changePlanetInfo(planetData){
	const linkPlanet = document.getElementById('link-planet').children;
	const planetName = document.querySelector('.planet-name')
	const planetDesc = document.querySelector('.planet-desc')
	const planetImg = document.querySelector('.planet-img')
	const planetDistance = document.getElementById('planet-distance')
	const planetTravelTime = document.getElementById('planet-travel')

	for(let i = 0; i < linkPlanet.length; i++){
		linkPlanet[i].addEventListener('click', () => {
			planetName.textContent = planetData.destinations[i].name;
			planetDesc.textContent = planetData.destinations[i].description;
			planetImg.src = planetData.destinations[i].images.png;
			planetImg.alt = planetData.destinations[i].name + " Image"
			planetDistance.textContent = planetData.destinations[i].distance;
			planetTravelTime.textContent = planetData.destinations[i].travel;
			for(let j = 0; j < linkPlanet.length; j++){
				linkPlanet[j].classList.remove('active-hover')
				linkPlanet[j].classList.add('not-active')
			}
			linkPlanet[i].classList.toggle('active-hover')
			linkPlanet[i].classList.remove('not-active')
			
			
		})
	}
}


fetchPlanetData()
