

// const employeers = [
//     {
        
//         id: 0,
//         name: "YarikHead",
//         dept_unit_id: 0,
//         tel: "123-123-3", 
//         salary: 3000
//     },
//     {
//         id: 1,
//         name: "MashaLead",
//         dept_unit_id: 1,
//         tel: "123-123-3", 
//         salary: 2000
//     },
//     {
//         id: 2,
//         name: "SashaLead",
//         dept_unit_id: 1,
//         tel: "123-123-3", 
//         salary: 2200
//     },
    
//     {
//         id: 3,
//         name: "MirraDev",
//         dept_unit_id: 2,
//         tel: "123-123-3",
//         salary: 1200
//     },

//     {
//         id: 4,
//         name: "IraDev",
//         dept_unit_id: 2,
//         tel: "123-123-3",
//         salary: 1000
//     },

//     {
//         id: 5,
//         name: "DanikHead3",
//         dept_unit_id: 3,
//         tel: "123-123-33",
//         salary: 3000
//     },

//     {
//         id: 7,
//         name: "KoliaLead",
//         dept_unit_id: 4,
//         tel: "123-123-3",
//         salary: 2000
//     },

//     {
//         id: 6,
//         name: "OliaLead3",
//         dept_unit_id: 4,
//         tel: "123-123-3",
//         salary: 2200
//     },
    
//     {
//         id: 9,
//         name: "SienaTest",
//         dept_unit_id: 5,
//         tel: "123-123-3",
//         salary: 1000
//     },

//     {
//         id: 8,
//         name: "LenaTest",
//         dept_unit_id: 5,
//         tel: "123-123-3",
//         salary: 1200
//     }
// ];

const depts = [
// let developer = 
{
    name: 'Developers',
    id: 2,
    // dept_units: [],
    parent_id: 1,
},
// let devLead = 
{
    name: 'Lead Developers',
    id: 1,
    // dept_units: [developer],
    parent_id: 0,
},
// let devDeptHead = 
{
    name: 'Development Management',
    id: 0,
    // dept_units: [devLead],
    parent_id: null,
},
// let qaTester =
 {
    name: 'Testers',
    id: 5,
    // dept_units: [],
    parent_id: 4,
},
// let qaLead = 
{
    name: 'Lead QA',
    id: 4,
    // dept_units: [qaTester],
    parent_id: 3,
},
// let qaDeptHead = 
{
    name: 'Quality Assurance Management',
    id: 3,
    // dept_units: [qaLead],
    parent_id: null,
},
];


depts.forEach(function (child){
    if (child.parent_id !== null){
        depts.forEach(function(parent){
            if (child.parent_id === parent.id){
                if (!parent.children){
                parent.children = [];
                }
                parent.children.push(child);

            }
        })
    }
});

const deptsTree =  depts.filter(depts => depts.parent_id === null);
console.log(deptsTree);





let htmlTreeParent = document.getElementsByClassName ('html_tree')[0];
// htmlTreeParent.addEventListener('click', clickHandler);
// ulElements.push(htmlTreeParent);

traverseTree (deptsTree, htmlTreeParent);

function traverseTree(elements, parentEl) {
    if (!elements){
        return
    }
    elements.forEach(function (el){
        let liEl = document.createElement ('li');
        liEl.innerText = el.name;
        parentEl.appendChild(liEl);
        if (el.children) {
            liEl.classList.add('menu');
            let ulEl = document.createElement('ul');
            liEl.appendChild(ulEl);
            traverseTree (el.children, ulEl);
            let spanTriangle = document.createElement('span');
            spanTriangle.classList.add('caret');
            liEl.appendChild(spanTriangle);

        }
    });
};



let container = document.getElementById('container');
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let btnCleanOut = document.createElement('button');


container.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

let flexbox = document.getElementsByClassName('flexbox')[0];
flexbox.appendChild(btnCleanOut);
btnCleanOut.innerText = 'CLEAN OUT';
btnCleanOut.classList.add('btn');

    
let trHead= document.createElement('tr');
thead.appendChild(trHead);


['ID', 'Name', 'Dept_unit_id', 'Telephone', 'Salary'].map(el =>{
    let tdHead= document.createElement('td');
    trHead.appendChild(tdHead);
    tdHead.innerText = el;
});

function renderTable(departmentName) {
    console.log(departmentName);
    let departmentId = getDepartmentId(departmentName);
    console.log(departmentId);
    let employeersFromDepartment = getArrayDepartmentEmpls(departmentId);
    console.log(employeersFromDepartment);

    employeersFromDepartment.forEach(function(element){
        let trBody = document.createElement('tr');
        tbody.appendChild(trBody);
        for (let key in element) {
            let tdBody = document.createElement('td');
            trBody.appendChild(tdBody);
            tdBody.innerText = element[key];
        }
    });
}

function getDepartmentId(departmentName) {
    let departmentId;
      depts.forEach(function(dept){
        if (dept.name === departmentName){
            console.log(dept.id);
            departmentId = dept.id;
        }
    });
    return departmentId;
}

function getArrayDepartmentEmpls(departmentId) {
    
    return employeers.filter(function(employeer) {
        if (employeer.dept_unit_id === departmentId ) {
            return employeer;
        }
    });
}

// function getFromServerEmloyees(){
//     fetch('http://localhost:8090/0_department.json')
//         .then((res) => console.log('pfghjc' + res.json()))
//         .then((result) => {
//             console.log('работники' + result);
//         });
// };

// getFromServerEmloyees();

const listDept = document.getElementsByTagName ('li');
document.addEventListener('click', function(event) {
    for(let i = 0; i < listDept.length; i++) {

        if (listDept[i] === event.target) {
            listDept[i].classList.add('font');

        renderTable(getTextContent(event.target));

        } else {
            listDept[i].classList.remove('font');
        }
    }

    if(event.target.classList.contains('caret')){
        event.target.parentElement.classList.toggle('--expanded');
    }
});

function getTextContent (element){
    for ( let i = 0; i <element.childNodes.length; i++)
        if (element.childNodes[i].nodeType === Node.TEXT_NODE)
            return element.childNodes[i].textContent;
}

btnCleanOut.addEventListener('click', function(event) {
    while(tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
});

// let menu = document.getElementsByClassName('menu');
// document.addEventListener('click', function(event){
//     if(menu === event.target){
//         menu.classList.add('passive_menu');
//     }
// })




// let titleElem = htmlTreeParent.querySelector('.title');

// titleElem.addEventListener('click', function(event) {
//     htmlTreeParent.classList.add('open');
// });

















