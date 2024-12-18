const URL = 
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const countryList = {
    INR: "IN",
    PKR: "PK",
    BDT: "BD",
    USD: "US",
};

const box = document.querySelectorAll(".table select")

for(select of box){
    for(let i in countryList){
        let option = document.createElement("option");
        option.innerText = i;
        option.value = i;

        if(select.name === "from" && i === "INR") {
            option.selected = "selected";
        } else if (select.name === "to" && i === "USD") {
            option.selected = "selected";
        }

        select.append(option)
    }
}
