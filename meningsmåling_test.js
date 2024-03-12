let jaButton = document.getElementById("jaButton")
let neiButton = document.getElementById("neiButton")

jaButton.onclick = sendJa
neiButton.onclick = sendNei

const URL = "https://rasmusweb.no/spm.php"
const sporsmolsId = "undersokelse2"

  async function sendJa() {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
       //   'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: sporsmolsId, svar: "Ja" })
      })
      console.log("gikk det bra?", response.ok)
}

async function sendNei() {
    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({id: sporsmolsId, svar: "Nei" })
      })
}

getRequest()

async function getRequest() {
  const htmlObj = document.getElementById("getResult")
  htmlObj.innerHTML = "Waiting for response"

  const apiCallPromise = await fetch(URL + "?id=" + sporsmolsId, {
    method: "GET",
    //  mode: "no-cors", // no-cors, *cors, same-origin
    headers: {
      Accept: "application/json",
    },
    // Kan ikke ha med body i GET request. body: JSON.stringify({ id: "forEu" }),
  })

  htmlObj.innerHTML = ""

  // const p = document.createElement("p")
  // p.textContent = "StatusCodeOK: " + apiCallPromise.ok
  // htmlObj.appendChild(p)

  // Getting the json entries from the response:
  const entries = await apiCallPromise.json()
  console.log(entries)
  console.log(entries.length)

   let data = [
    {
      x: [entries[1].antall, entries[0].antall],
      y: [entries[1].svar,entries[0].svar],
      type: 'bar',
      orientation: 'h',
      marker: {
        color: ['#2A2D43','#2A2D43']
    }}
  ]

  let layout = {
    yaxis: {
      showticklabels: false
    }
  }

  Plotly.newPlot('soylediagram', data, layout,{displayModeBar: false})
}




  // for (let i = 0; i <= entries.length; i++) {
  //   let data = [
  //     {
  //       x: [entries[i].svar],
  //       y: [entries[i].antall],
  //       type: 'bar'
  //     }
  //   ]
  //   Plotly.newPlot('soylediagram', data)
  // }

//function JSONtoSTR(resultJson){
//  const obj = JSON.parse(resultJson) 
//  console.log(obj[1]);
//  const output_nei = obj[1];
//  const { svar: svar_nei, antall: antall_nei } = output_nei;
//  const nei = antall_ne 
//  console.log(obj[0]);
//  const output_ja = obj[0];
//  const { svar: svar_ja, antall: antall_ja } = output_ja;
//  const ja = antall_j 
//  console.log("nei: " + nei, "ja: " + ja);
//}
