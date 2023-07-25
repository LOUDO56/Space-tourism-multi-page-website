const mobileNavContainer = document.querySelector('.mobile-nav-container');
const hamburgerIcon = document.getElementById('hamburger-icon');
const iconClose = document.getElementById('icon-close');

const toggleMobileNav = () => {
    mobileNavContainer.classList.toggle('is-active');
};

hamburgerIcon.addEventListener('click', toggleMobileNav);
iconClose.addEventListener('click', toggleMobileNav);





// -------- Destination Page -------- // 



async function fetchData(){
	let data;
	const res = await fetch('../data.json')
	data = await res.json()
	if(window.location.href.includes("destination")){
		changePlanetInfo(data)
	} else if (window.location.href.includes("crew")){
		changeCrewInfo(data)
	} else if (window.location.href.includes("technology")){
		changeTechInfo(data)
	}
}

function changePlanetInfo(planetData){
	const linkPlanet = document.getElementById('link-planet').children;
	const planetName = document.querySelector('.planet-name')
	const planetDesc = document.querySelector('.planet-desc')
	const planetImg = document.querySelector('.planet-img')
	const planetDistance = document.getElementById('planet-distance')
	const planetTravelTime = document.getElementById('planet-travel')
	const animations = [
		{ element: planetName, props: [{ transform: "translate(50px)", opacity: 0 }, { transform: "translate(0)", opacity: 1 }] },
		{ element: planetDesc, props: [{ transform: "translate(50px)", opacity: 0 }, { transform: "translate(0)", opacity: 1 }] },
		{ element: planetTravelTime, props: [{ transform: "translateY(50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }] },
		{ element: planetDistance, props: [{ transform: "translateY(50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }] },
	  ];
	let onWhatPage = 0;

	for(let i = 0; i < linkPlanet.length; i++){
		linkPlanet[i].addEventListener('click', () => {
			if(onWhatPage !== i){
				planetImg.animate([
					{opacity: 0},
					{opacity: 1}
				], {
					duration: 300
				})
				for (const animation of animations) {
					animation.element.animate(animation.props, { duration: 115 });
				  }
			}
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
			onWhatPage = i;
			
			
		})
	}
}


function changeCrewInfo(crewData){
	const crewJob = document.querySelector('.crew-job')
	const crewName = document.querySelector('.crew-name')
	const crewDesc = document.querySelector('.crew-desc')
	const crewImg = document.querySelector('.crew-img')
	const linkCrew = document.querySelectorAll('.btn-change-crew')
	let onWhatPage = 0;
	const animations = [
		{ element: crewJob, props: [{ transform: "translate(-50px)", opacity: 0 }, { transform: "translate(0)", opacity: 1 }] },
		{ element: crewName, props: [{ transform: "translate(-50px)", opacity: 0 }, { transform: "translate(0)", opacity: 1 }] },
		{ element: crewDesc, props: [{ transform: "translate(-50px)", opacity: 0 }, { transform: "translate(0)", opacity: 1 }] }
	  ];
	for(let i = 0; i < linkCrew.length; i++){
		linkCrew[i].addEventListener('click', () => {
			if(onWhatPage !== i){
				crewImg.animate([
					{opacity: 0},
					{opacity: 1}
				], {
					duration: 100
				})
				for (const animation of animations) {
					animation.element.animate(animation.props, { duration: 115 });
				}
			}
			linkCrew[onWhatPage].classList.toggle('btn-active')
			linkCrew[i].classList.toggle('btn-active')
			crewJob.textContent = crewData.crew[i].role
			crewName.textContent = crewData.crew[i].name
			crewDesc.textContent = crewData.crew[i].bio
			crewImg.src = crewData.crew[i].images.png
			onWhatPage = i;
		})
	}
}



function changeTechInfo(techData){
	const rocketName = document.querySelector('.technology-rocket')
	const rocketDesc = document.querySelector('.technology-desc')
	const rocketImg = document.querySelectorAll('.technology-img')
	const linkTech = document.querySelector('.rocket-choice').children
	let onWhatPage = 0;
	const animations = [
		{ element: rocketName, props: [{ transform: "translateY(-50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }] },
		{ element: rocketDesc, props: [{ transform: "translateY(-50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }] },
		{ element: document.querySelector('.technology-title'), props: [{ transform: "translateY(-50px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }] }
		
	  ];
	for(let i = 0; i < linkTech.length; i++){
		linkTech[i].addEventListener('click', () => {
			if(onWhatPage !== i){
				rocketImg.forEach(img => img.animate([{opacity: 0}, {opacity: 1}], { duration: 100 }));
				for (const animation of animations) {
					animation.element.animate(animation.props, { duration: 115 });
				}
			}
			linkTech[onWhatPage].classList.toggle('active')
			linkTech[i].classList.toggle('active')
			rocketName.textContent = techData.technology[i].name
			rocketDesc.textContent = techData.technology[i].description
			if(window.screen.width < 1182){
				rocketImg[1].src = techData.technology[i].images.landscape
			} else {
				rocketImg[0].src = techData.technology[i].images.portrait
			}
			
			onWhatPage = i;
		})
	}
}


fetchData();
