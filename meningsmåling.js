let jaButton = document.getElementById("jaButton");
let neiButton = document.getElementById("neiButton");

jaButton.onclick = sendJa;
neiButton.onclick = sendNei;

const URL = "https://rasmusweb.no/spm.php";
const sporsmolsId = "undersokelse2";

async function sendJa() {
  const response = await fetch(URL, {
    method: "POST",
    headers: {},
    body: JSON.stringify({ id: sporsmolsId, svar: "Ja" }),
  });
  console.log("gikk det bra?", response.ok);
  getRequest();
}

async function sendNei() {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify({ id: sporsmolsId, svar: "Nei" }),
  });
  getRequest();
}

getRequest();
setInterval(getRequest, 60000);

async function getRequest() {
  const htmlObj = document.getElementById("getResult");
  htmlObj.innerHTML = "Waiting for response";

  const apiCallPromise = await fetch(URL + "?id=" + sporsmolsId, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  htmlObj.innerHTML = "";

  const entries = await apiCallPromise.json();
  console.log(entries);
  console.log(entries.length);

  let data = [
    {
      x: [entries[1].antall, entries[0].antall],
      y: [entries[1].svar, entries[0].svar],
      type: "bar",
      orientation: "h",
      marker: {
        color: ["#2A2D43", "#2A2D43"],
      },
    },
  ];

  let layout = {
    yaxis: {
      showticklabels: false,
    },
  };

  Plotly.newPlot("soylediagram", data, layout, { displayModeBar: false });
}
