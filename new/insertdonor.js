document.getElementById("save").addEventListener("click", insertRec);
function insertRec()
{
    let donName=document.getElementById("name").value;
    let donAge=document.getElementById("age").value;
    let donGroup=document.getElementById("BloodGroup").value;
    let donAddress=document.getElementById("Address").value;
    let donCity=document.getElementById("city").value;
    let donNum=document.getElementById("numbb").value;
    

    let url="http://localhost:3000/donors";

    fetch(url,{

      // Adding method type
      method: "POST",
      
      // Adding body or contents to send
      body: JSON.stringify({
            name: donName,
            age: donAge,
            bloodgroup: donGroup,
            address:donAddress,
            city: donCity,
            Phone :donNum
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    }
    ).then((response)=>{
    response.json()
    }).then(()=>{
        alert("Record save Succesfully!");
}
);
}