let jaButton = document.getElementById("jaButton")
let neiButton = document.getElementById("neiButton")

jaButton.onclick = sendJa
neiButton.onclick = sendNei

const url = //url

  async function sendJa() {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: "Ja" })
      })
}

async function sendNei() {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: "Nei" })
      })
}


