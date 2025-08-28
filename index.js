function increaseHeart() {
    let increase=parseInt(document.getElementById("increaseHeart").innerText);
    increase++;
    document.getElementById("increaseHeart").innerText=increase;
}

function call(text, num) {
    let coins = parseInt(document.getElementById("coins").innerText);
    if (coins >= 20) {
        alert("📞calling " + text + " " + num);
        coins -= 20;
        document.getElementById("coins").innerText = coins;
        document.getElementById("history-add").innerHTML += `
            <div class="text-sm text-gray-700 my-1">
                <p>📞 ${text}</p>
                <p>📱 ${num}</p>
            </div>
        `;
    } else {
        alert("❌You have insufficient coins! You need at least 20");
    }
}


}