
function showCity(){
    let villeCourante = document.getElementById("choose").value;
    let cities = document.getElementsByClassName("city");
    for(i=0;i<cities.length;i++){
        let show = document.getElementById(cities[i].id);

    if(villeCourante == " "){
        show.style.display="";
        
    }
    else if(villeCourante == cities[i].id){
        show.style.display=""; 
        
    }
     else{ 
        show.style.display="none";
        
    }
}

}