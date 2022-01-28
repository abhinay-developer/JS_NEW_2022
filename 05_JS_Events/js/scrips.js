let log=console.log;


displayName=()=>{

    let myDocument=document.getElementById('dName');
    let myStyle=myDocument.style;

    var fName=document.getElementById('firtname').value;
    myDocument.innerHTML=fName;
    myStyle.color="red";
    myStyle.backgroundColor="black";
    myStyle.padding="34px";




    
}

onInputAge=(event)=>{

  log(event);
}