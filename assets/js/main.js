

function updatePorfileInfo(profileDate){
    const photo =  document.getElementById('profile.photo')
    photo.src = profileDate.photo
    photo.alt = profileDate.name
 
    const name = document.getElementById('profile.name')
   name.innerText = profileDate.name
 
    const job = document.getElementById('profile.job')
    job.innerText = profileDate.job
 
    const location = document.getElementById('profile.location')
    location.innerText = profileDate.location
 
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileDate.phone
    phone.href = `tel:${profileDate.phone}`
 
    const email = document.getElementById('profile.email')
    email.innerText = profileDate.email
    email.href = `mailto:${profileDate.email}`
 
 
 
    //console.log(photo)
 }
 
 function updateSoftSkills(profileDate){
     const softSkills = document.getElementById('profile.skills.softskills')
 
     softSkills.innerHTML = profileDate.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
 }
 
 function updateHardSkills(profileDate){
     const hardSkills = document.getElementById('profile.skills.hardSkills')
 
     hardSkills.innerHTML = profileDate.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
 }
 
 function updateLangueagem(profileDate){
     const languagens = document.getElementById('profile.languages')
 
     languagens.innerHTML = profileDate.languages.map(languages => `<li>${languages}</li>`).join('')
 }
 
 function upadatePortfolio(profileDate){
     const portfolio = document.getElementById('profile.portfolio')
     portfolio.innerHTML = profileDate.portfolio.map(project => {
         return`
         <li>
             <h3 class="title ${project.github ? 'github' : ''}">${project.name}</h3>
             <a href="${project.url}" target="_blank">${project.url}</a>
         </li>
     `
     }).join('')
 }
 
 function upadateProfessionalExperience(profileDate){
     const profissionalExperience = document.getElementById('profile.professionalExperience')
     
     profissionalExperience.innerHTML = profileDate.professionalExperience.map(experience =>{
         return `
         <li>
         <h3 class="title ">${experience.name}</h3>
         <p class="period" >${experience.pediod}</p>
         <p>
             ${experience.description}
         </p>
     </li>`
         
     }).join('')
 }
 
 (async  ()=>{
     const profileDate = await fetchProfileDate()
     console.log(profileDate)
     updatePorfileInfo(profileDate)
     updateSoftSkills(profileDate)
     updateHardSkills(profileDate)
     updateLangueagem(profileDate)
     upadatePortfolio(profileDate)
     upadateProfessionalExperience(profileDate)
 })()
 
 
 
 
 
 
 