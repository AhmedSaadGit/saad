function begin(){
    let cities = document.getElementsByClassName("city");
    for(i=0;i<cities.length;i++){
    let show = document.getElementById(cities[i].id);
    show.style.display="none";}
}


function showCity(){
    let villeCourante = document.getElementById("choose").value;
    let cities = document.getElementsByClassName("city");
    
    for(i=0;i<cities.length;i++){
        let show = document.getElementById(cities[i].id);
        
    if(villeCourante == "all"){
        show.style.display="";
        selected = "Every";
    }
    else if(villeCourante == cities[i].id){
        show.style.display=""; 
        selected = villeCourante;
    }
     else{ 
        show.style.display="none";  
    }

}

document.getElementById("selectedcity").innerHTML = "You Have Choosed "+ selected +" city";

}