



function autorefresh()
{
    setTimeout(getJoke,50);
    setInterval(getJoke, 15000);
}



function setJoke(x)
{
    document.getElementById("jokearea").innerHTML = x;

}


function getJoke()
{
     return fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then(response => response.json())
    .then(response => setJoke(response.joke));
}