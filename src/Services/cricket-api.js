const API_KEY = "GTjW7oXs2DNOtU7ZYlkV41DjWIg2";

export const getCricketMatches = () =>{
  
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}