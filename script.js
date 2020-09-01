
const students=[
    {
        name:"Krithi",
        regno:101,
        courses:["C","Python","C#"]
    },
    {
        name:"Thrupthi",
        regno:102,
        courses:["C","Python","C#"]
    },
    {
        name:"Sampath",
        regno:103,
        courses:["C","Python","C#"]
    }
]

const divStudents=document.getElementById('div-students');
for(var i=0;i<students.length;i++){
    const divMain=document.createElement('div');
    divMain.classList.add('card');
    const nameElem=document.createElement('h3');
    const regno=document.createElement('h3');
    nameElem.innerText=students[i].name;
    regno.innerText=students[i].regno;
    divMain.appendChild(nameElem);
    divMain.appendChild(regno);
    divStudents.appendChild(divMain);

    const courses=students[i].courses;
    const ulElem=document.createElement('ul');
    for(var j=0;j<courses.length;j++){
        const liElem=document.createElement('h4');
        liElem.innerText=courses[j];
        ulElem.appendChild(liElem);
    }
    divMain.appendChild(ulElem);
}
