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
        <p class="font-regular">${time};
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

function copyText() {
   let copied= document.getElementById("hotLineNumber").innerText;
   let times=parseInt(document.getElementById("timesCopied").innerText);
   navigator.clipboard.writeText(copied).then(function(){
    alert("Copied: "+copied);
    times++;
    document.getElementById("timesCopied").innerText=times;
   }).catch(err,function(){
    console.error("Failed to copy",err);
   })
}