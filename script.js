function validateForm(){
    let formElement = document.querySelector(".form")
    let inputElement = formElement.querySelectorAll(".form-input")
    for (let i= 0; i < inputElement.length; i++){
        if(inputElement[i].value ===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText = `Please enter your ${inputElement[i].id}`

        }else {
            inputElement[i].parentElement.querySelector(".error-message").innerText = ""
        }
    }
}
function addNew(){
    validateForm()
    let formElement = document.querySelector(".form")
    let errorElement = formElement.querySelectorAll(".error-message")
    let arrErrorElement  = []
    for (let i=0; i<errorElement.length; i++){  
        arrErrorElement.push(errorElement[i].innerText);
    }
    let checkErrorElement = arrErrorElement.every(value => value ==="")
    if(checkErrorElement){
        let name = document.getElementById("name").value    
        let adress = document.getElementById("adress").value
        let listStudent = localStorage.getItem("list-student") ? JSON.parse(localStorage.getItem("list-student")) : []
        listStudent.push({
            name: name  ,
            adress : adress
        })
        localStorage.setItem("list-student",JSON.stringify(listStudent))
        renderStudent()
    }
}
function renderStudent(){
    let listStudent = localStorage.getItem("list-student") ? JSON.parse(localStorage.getItem("list-student")) : []
    let student =  `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Adresst</th>
    <th>Action</th>
</tr>`
listStudent.map((value,index) => {
    student +=` <tr>
            <td>${index +1}</td>
            <td>${value.name}</td>
            <td>${value.adress}</td>
            <td>
                <button> Edit</button>
                <button> Delete</button>
            </td>
        </tr>`
})
    document.getElementById("tableContent").innerHTML = student
}