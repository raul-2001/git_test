today = new Date();
thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.classList.add('copyright');
copyright.textContent = `Raul ${thisYear}`;
footer.appendChild(copyright);


// Skills
skills = ['javaScript', 'HTML', 'CSS', 'GIT', 'Python', 'Django', 'SQL']
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector("ul");
for(var a=0; a < skills.length; a++){
    const skill = document.createElement('li');
    skill.innerText = skills[a];
    skillsList.appendChild(skill);
}