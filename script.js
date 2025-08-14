let allQuestion = document.querySelectorAll(".faqitems h2");
    allQuestion.forEach((item,idx)=>{
        item.addEventListener("click",()=>{
            if(item.lastElementChild.innerHTML=="+"){
                item.lastElementChild.innerHTML="-";
            }else {
                item.lastElementChild.innerHTML="+"
            }
            item.nextElementSibling.classList.toggle('showAns');
        })
    })