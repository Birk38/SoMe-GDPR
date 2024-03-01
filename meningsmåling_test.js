let jaButton = document.getElementById("jaButton")
let neiButton = document.getElementById("neiButton")

jaButton.onclick = sendJa()
neiButton.onclick = sendNei()

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


const url = "";
 
const resultJson = '[{"svar": "ja", "antall": 10},{"svar":"nei","antall":6}]';
const obj = JSON.parse(resultJson);

console.log(obj[1]);
const output_nei = obj[1];
const { svar: svar_nei, antall: antall_nei } = output_nei;
const nei = antall_nei;

console.log(obj[0]);
const output_ja = obj[0];
const { svar: svar_ja, antall: antall_ja } = output_ja;
const ja = antall_ja;

console.log("nei: " + nei, "ja: " + ja);