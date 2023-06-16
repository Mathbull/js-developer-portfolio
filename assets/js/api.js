
async function fetchProfileDate(){
    const url = 'https://raw.githubusercontent.com/Mathbull/js-developer-portfolio/main/data/profile.json'
    const fetching = await fetch(url)
    
    return await fetching.json()

}










