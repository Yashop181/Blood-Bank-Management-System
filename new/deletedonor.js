function redDel(myid)
{
    let recId=myid;
    alert(recId);
    let url=`http://localhost:3000/donors/${recId}`;
    fetch(url, {  method: "DELETE"}).
    then(response => {  
        alert("Record deleted" );
    });
}
async function recordDelete()
{
    let url="http://localhost:3000/donors";
    let myObj= await fetch(url);
    let myData=await myObj.json();
    

    let tableData=`<table border="1" width="600px">
    <tr>
    <th>name</th>
    <th>age</th>
    <th>bloodgroup</th>
    <th>address</th>
    <th>city</th>
    <th>Phone</th>
    <th>Delete</th>   
    
    </tr>
    
    `;
    
    myData.map((key)=>{
        tableData+=`
        <tr>
        <td>${key.name}</td>
        <td>${key.age}</td>
        <td>${key.bloodgroup}</td>
        <td>${key.address}</td>
        <td>${key.city}</td>
        <td>${key.Phone}</td>
        <td>
        <a href="" onclick="redDel(${key.id});">
        <img src="img/delet.png" alt="" width="40" height="30">
        </a>
        </td>

        </tr>
        
        `;
    });
    tableData+="</table>";
    document.getElementById("data").innerHTML=tableData;

}
recordDelete();