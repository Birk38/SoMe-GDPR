let jaButton = document.getElementById("jaButton")
let neiButton = document.getElementById("neiButton")

// funksjon som sender 1 "ja" til meningsmålingen
jaButton.onclick = sendDAta(Ja)

const url = 

jason.stringify()
async function sendData() {
    const response = await fetch(url)
    const data = await.response.json()
    console.log(data)
}

fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Ja)
  })
