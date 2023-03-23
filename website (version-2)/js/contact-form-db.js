function saveData(){
    let name, email, number, msg;
    
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    msg = document.getElementById("message").value;


    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[]

    if(user_record.some((v)=>{return v.email == email}))
    {
        alert("Duplicate data");
    }
    else{
        user_record.push({
            "Name" : name,
            "Email" : email,
            "Number" : number,
            "Message" : msg
        })
        localStorage.setItem("users",JSON.stringify(user_record));
    }
}

