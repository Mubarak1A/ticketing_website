function calc(adults, children){
    adults = (adults <= 0) ? 0 : adults;
    children = (children <= 0) ? 0 : children;
    let price = (adults * 12) + (children * 5);
    return price;
}

window.onload = function(){
    let btn = document.getElementById("buybtn");

    btn.onclick = function(){
        let adults = document.getElementById("Adults").value;
        let children = document.getElementById("Children").value;
        adults = parseInt(adults);
        children = parseInt(children);
        let people = adults + children;
        let price = calc(adults, children);

        alert(people + " TICKETS BOOKED\n" + "Adults : " + adults + "\n" +
        "Children : " + children + "\n" + "Total Price : $" + price);
    }
}