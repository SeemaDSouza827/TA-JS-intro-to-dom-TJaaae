//create structre
nav=document.createElement("nav")
div=document.createElement("div")
h1=document.createElement("h1")
h2=document.createElement("h2")
h3=document.createElement("h3")
section=document.createElement("section") 
article=document.createElement("article")
nav.append(h1)
section.append(article)
article.append(div)
document.body.append(nav,section)
//navbar
nav.style.background = "blue";
h1.style.color = "white";
h1.style.fontSize = "20px";
h1.style.fontWeight = "bold";
h1.style.padding = "20px";
//navbar-content
h1.innerText="People of GOT"
//div
article.classList.add("flexBox")
got.houses.forEach((elem)=>{elem.people.forEach((ppl)=>{
    div_inner = document.createElement("div");
    img = document.createElement("img")
    img.style.borderRadius = "2rem solid #3B7C78"
    img.src = ppl.image
    div_inner.classList.add("card")
    //inside div_inner
    div1 = document.createElement("div");
    //first_row
    div1.classList.add("flexBox")
    //second row
    div2 = document.createElement("div");
    div2.innerText = ppl.description;
    div2.style.textAlign = " center";
    div2.style.fontWeight = "500";
    div2.style.fontSize = "0.75rem"
    div2.style.padding = "10px";
    //third row
    div3 = document.createElement("div");
    div3.innerText = "learn More!";
    div3.style.color ="blue";
    div3.style.textAlign = "center";
    div3.style.padding = "10px"; 
    div3.style.backgroundColor = "#E7EDFD";
    div3.style.borderRadius = "10px";
    div3.style.marginBottom = "0px";

    nameChar = document.createElement("h3");
    nameChar.innerText = ppl.name;
    nameChar.style.padding = "10px";
    nameChar.style.fontWeight = "800";
    nameChar.style.fontSize ="1rem"
    nameChar.style.marginTop = "30px";

    div_inner.append(div1);
    div_inner.append(div2);
    div_inner.append(div3);
    div1.append(img);
    div1.append(nameChar);
    article.append(div_inner);
})

})