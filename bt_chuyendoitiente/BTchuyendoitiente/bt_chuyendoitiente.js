function convert() {
    let Amount =+document.getElementById("Amount").value;
    let From =+document.getElementById("From").value;
    let To=+document.getElementById("To").value;
    let rate=From/To;
    let result=Amount*rate;
    document.getElementById("result").innerText=result
}

