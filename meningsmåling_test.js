let jaButton = document.getElementById("jaButton")
let neiButton = document.getElementById("neiButton")

// funksjon som sender 1 "ja" til meningsmålingen
jaButton.onclick = sendDAta(Ja)

const url = "";

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