const person = [
  {
    id: 1,
    name: "ivona bura",
    job: "nist",
    info: "idshjadpijaspodjlasmf;ldmgkldnjmka[p0fkds[poakdlmgfapodkj[afkikjasnfkiasnjfknasoifjasoinfkdasmcv,asmofkjafjposdmj;avfdmnasfklinjaifjaskcmfdkasmflkdnasflnadsfkinjafdklmakldnahfaui",
  },
  {
    id: 2,
    name: "barbara bura",
    job: "pist",
    info: "idshjadpijaspodjlasmf;ldmgkldnjmka[p0fkds[poakdlmgfapodkj[afkikjasnfkiasnjfknasoifjasoinfkdasmcv,asmofkjafjposdmj;avfdmnasfklinjaifjaskcmfdkasmflkdnasflnadsfkinjafdklmakldnahfaui",
  },
  {
    id: 3,
    name: "lovre bura",
    job: "mist",
    info: "idshjadpijaspodjlasmf;ldmgkldnjmka[p0fkds[poakdlmgfapodkj[afkikjasnfkiasnjfknasoifjasoinfkdasmcv,asmofkjafjposdmj;avfdmnasfklinjaifjaskcmfdkasmflkdnasflnadsfkinjafdklmakldnahfaui",
  },
];
let currentPerson = 0;
const name = document.querySelector(".name");
const job = document.querySelector("#job");

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
function showPerson() {
  const item = person[currentPerson];
  name.textContent = item.name;
  job.textContent = item.job;
  console.log(item);
}
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const randomBtn = document.querySelector(".random");
nextBtn.addEventListener("click", function () {
  currentPerson++;
  if (currentPerson > person.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
});
prevBtn.addEventListener("click", function () {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = person.length - 1;
  }
  showPerson(currentPerson);
});
randomBtn.addEventListener("click", function () {
  currentPerson = Math.floor(Math.random() * person.length);
  showPerson(currentPerson);
  console.log(currentPerson);
});
