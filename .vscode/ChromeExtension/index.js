let myLeads = [];

const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById('input-btn');
const ulEl= document.getElementById("ulel");


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads()
}


 
inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();

})
let listItems =""

function renderLeads() {
for (let i =0; i<myLeads.length; i++)
{
    listItems+= `
             <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    // const ElementList = document.createElement("li");
    // ElementList.textContent = myLeads[i];
    // ulEl.append(ElementList)
}
ulEl.innerHTML = listItems;
}