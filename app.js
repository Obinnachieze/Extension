const myLead = [];
const inputEl = document.getElementById("input-el");
const leadList = document.getElementById("lead-list");
const submitBtn = document.getElementById("save-btn");

submitBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    listItems += `<li><a href='${myLead[i]}' target='_blank'>${myLead[i]}</a></li>`;
  }
  leadList.innerHTML = listItems;
}
