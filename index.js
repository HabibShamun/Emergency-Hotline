function increaseHeart() {
    let increase=parseInt(document.getElementById("increaseHeart").innerText);
    increase++;
    document.getElementById("increaseHeart").innerText=increase;
}

function call(text,num) {
    let coins=parseInt(document.getElementById("coins").innerText);
    if(coins>=20) {
        alert("📞calling "+text+" "+num);
        coins-=20;
        document.getElementById("coins").innerText=coins;
        let now = new Date();
        let time= now.toLocaleTimeString();
        document.getElementById("history-add").className=""
        document.getElementById("history-add").innerHTML += `
    <div class="bg-[#F5FFF6] py-[10px] px-[20px] mb-[30px] flex justify-between items-center rounded-xl">
        <div >
        <p class="font-semibold">${text}</p>
        <p class="font-regular">${num}</p>
        </div>
        <p class="font-regular">${time}
        </p>
    </div>
`;
    } else {
        alert("❌You have insufficient coins! you need atleast 20");
    }

}


function clearHistory() {
    document.getElementById("history-add").innerHTML="";
}

function copyText(num) {
   let copied= document.getElementById("hotLineNumber").innerText;
   let times=parseInt(document.getElementById("timesCopied").innerText);
   navigator.clipboard.writeText(num).then(function(){
    alert("Copied: "+num);
    times++;
    document.getElementById("timesCopied").innerText=times;
   }).catch(err,function(){
    console.error("Failed to copy",err);
   })
}

function hamburger() {
    const nav=document.getElementById("right-nav");
    if(window.innerWidth<640) {
       if(nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        nav.classList.add("flex","flex-col","absolute","top-16","right-0","w-full","shadow-md","p-4","bg-white");
       } else {
        nav.classList.add("hidden");
        nav.classList.remove("flex","flex-col","absolute","top-16","right-0","w-full","shadow-md","p-4","bg-white");
       }
    }
}
window.addEventListener("resize",function(){
    const nav=document.getElementById("right-nav");
    if(window.innerWidth>=640) {
       nav.classList.add("flex");
        nav.classList.remove("flex","flex-col","absolute","top-16","right-0","w-full","shadow-md","p-4","bg-white");
       
    }
     
    if(window.innerWidth<640) {
       nav.classList.remove("flex");
        nav.classList.add("flex","flex-col","absolute","top-16","right-0","w-full","shadow-md","p-4","bg-white");
       
    }
})