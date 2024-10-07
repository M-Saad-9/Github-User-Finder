const form = document.getElementById("form");
const image =document.getElementById("image");
const username =document.getElementById("username");
const repo =document.getElementById("repo")
const follower =document.getElementById("follower")
const following =document.getElementById("following");
const bio =document.getElementById("bio");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const inputValue = event.target.children[0].value
   
    const imgTag = image.children[0];
    const userName = username.children[0];
    const userLogin = username.children[1];
    const userLink = username.children[2]
    const userRepo = repo.children[1];
    const userFollower = follower.children[1];
    const userFollowing = following.children[1];
    const userBio = bio.children[0];
    
    


    const API_URL = `https://api.github.com/users/${inputValue}`;

    
    try {
        const response = await axios(API_URL);
        console.log(response);
        

        imgTag.src = response.data.avatar_url
        userName.innerHTML = response.data.name
        userLogin.innerHTML = `@ ${response.data.login}`
        userLink.href = response.data.html_url

        userRepo.innerHTML = response.data.public_repos
        userFollower.innerHTML = response.data.followers;
        userFollowing.innerHTML =  response.data.following
        userBio.innerHTML = response.data.bio


    } catch (error) {
        alert(`${error.response.data.message } Please Try Again`)
    }
    
});