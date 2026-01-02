let myLead = [];
const inputEl = document.getElementById("input-el");
const leadList = document.getElementById("lead-list");
const submitBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage;
  render(myLead);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`;
  }
  leadList.innerHTML = listItems;
}

clearBtn.addEventListener("dblclick", function () {
  myLead = [];
  localStorage.removeItem("myLead");
  render(myLead);
});

// leadList.addEventListener("dblclick", function (index) {
//   myLead.splice(index, 1);
//   localStorage.setItem("myLead", JSON.stringify(myLead));
//   renderLeads();
// });

submitBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead));
  render(myLead);
});
