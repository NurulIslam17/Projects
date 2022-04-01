
const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#btn');

const generateJokes = async () => {
  // alert ("Clicked");

  try{
      const setHeader ={
        headers: {
          Accept : "application/json"
        }
      }
    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;

  }catch(err){
    console.log(`The error is ${err}`);
  }
}

btn.addEventListener("click",generateJokes);
generateJokes(); 