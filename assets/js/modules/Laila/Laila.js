export default async function setupLaila() {
  return fetch("https://yesno.wtf/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error("nej, bare nej");
      }
      return response.json();
    })

    .then((data) => {
      yesno(data);
      return data;
    })

    .catch((error) => {
      console.log(error);
      return error;
    });
}

function yesno() {
  const yesnodisplay = document.getElementById("laila-p");
  const yesnobutton = document.getElementById("laila-button");

  yesnobutton.addEventListener("click", () => {
    fetch("https://yesno.wtf/api") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        
      });
  });
}

