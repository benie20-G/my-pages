function arrangeCountries(){
    let countries=document.getElementsByTagName("li")
    let europeanCountries=document.getElementById("europe-bg")
    let asianCountries=document.getElementById("asia-bg")
    let africanCountries=document.getElementById("africa-bg")

    for(let i=0 ; i<countries.length; i++){

        if(i==0 || i==1 || i==2){

    let group1=document.createElement("p")
    let text=document.createTextNode(countries[i].innerText)
    group1.appendChild(text)
    console.log(group1);
    africanCountries.appendChild(group1)
        }
         else if(i==3 || i==4 || i==5){

            let group2=document.createElement("p")
            let text2=document.createTextNode(countries[i].innerText)
            group2.appendChild(text2)
            console.log(group2);
        europeanCountries.appendChild(group2)
                }
       else{

            let group3=document.createElement("p")
            let text3=document.createTextNode(countries[i].innerText)
            group3.appendChild(text3)
            console.log(group3);
            asianCountries.appendChild(group3)
                }
               

    }
 }


