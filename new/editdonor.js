function updateSave(myid)
{
    let id=myid;
    let name=document.getElementById("nm").value;
    let age=document.getElementById("ag").value;
    let bloodgroup=document.getElementById("bg").value;
    let address=document.getElementById("ad").value;
    let city=document.getElementById("ct").value;
    let phone=document.getElementById("ph").value;
    let url=`http://localhost:3000/donors/${id}`;

    fetch(url, {
method: 'PUT',
body: JSON.stringify({
    name: name,
    age: age,
    bloodgroup: bloodgroup,
    address:address,
    city: city,
    Phone :phone
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json =>{
    alert("Successfully Updated!!");
})

}

function myid(myid)
{
    let recId=myid;
    let url=`http://localhost:3000/donors/${recId}`; 
    let myTable=`<table border="2" width="800">`;

    async function recDisplay()
    {
        // alert("done" + recId)

        let myObj=await fetch(url);
        let myData=await myObj.json();

        myTable+=`
                <tr>
                    <td>Edit Name</td>
                    <td><input type="text" value ="${myData.name}" id='nm'></td>
                    <tr>

                    <tr>
                    <td>Edit Age</td>
                    <td><input type="text" value ="${myData.age}" id='ag'></td>
                    </tr>

                    <tr>
                    <td>Edit bloodgroup</td>
                    <td><input type="text" value ="${myData.bloodgroup}" id='bg'></td>
                    </tr>

                    <tr>
                    <td>Edit address</td>
                    <td><input type="text" value ="${myData.address}" id='ad'></td>
                    <tr>

                    <tr>
                    <td>Edit city</td>
                    <td><input type="text" value ="${myData.city}" id='ct'></td>
                    <tr>

                    <tr>
                    <td>Edit Phone</td>
                    <td><input type="text" value ="${myData.Phone}" id='ph'></td>
                    <tr>
                    <td><input type="button" value ="data save!"
                    onclick="updateSave(${myData.id});" ></td>
                </tr>
                
                `;
        myTable += "</table>";
        document.getElementById("data1").innerHTML = myTable;

    }
    recDisplay();
}

async function editRecord()
{
    let url="http://localhost:3000/donors/"
    let myObj= await fetch(url);
    let myData = await myObj.json();


    let myTable=`<table border="1" width="800px">
    <tr>
    <th>name</th>
    <th>age</th>
    <th>bloodgroup</th>
    <th>address</th>
    <th>city</th>
    <th>Phone</th>
    <th>Edit</th>   
    
    </tr>
    `;
    

    myData.map((key)=>{
        myTable+=`
        <tr>
        <td>${key.name}</td>
        <td>${key.age}</td>
        <td>${key.bloodgroup}</td>
        <td>${key.address}</td>
        <td>${key.city}</td>
        <td>${key.Phone}</td>
        <td>
        <a href="#" onclick="myid(${key.id});">
        <img src="img/edi.png" alt="" width="30" height="30">
        
        </a>
        </td>

        </tr>
        `;
        
    });
    myTable+="</table>";
    document.getElementById("data").innerHTML=myTable;
}
editRecord();