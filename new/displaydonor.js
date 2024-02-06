
async function dataDisplay()
{
    let url="http://localhost:3000/donors";

    let myObj=await fetch(url);
    let myData= await myObj.json();

    let myTab=`<table border="1" width="300">
    
    <tr>
    <th>name</th>
    <th>age</th>
    <th>bloodgroup</th>
    <th>address</th>
    <th>city</th>
    <th>Phone</th>

    </tr>
    `
    myData.map((key)=>{
    myTab+=`<tr>
    <td>${key.name}</td>
    <td>${key.age}</td>
    <td>${key.bloodgroup}</td>
    <td>${key.address}</td>
    <td>${key.city}</td>
    <td>${key.Phone}</td>
    </tr>`
});

myTab+="</table>";
document.getElementById("demo").innerHTML=myTab;

} 
dataDisplay();