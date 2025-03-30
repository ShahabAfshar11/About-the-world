// script.js

const countryCapitalMap = {
    "Afghanistan": "Kabul",
    "Germany": "Berlin",
    "USA": "Washington, D.C.",
    "France": "Paris",
    "Italy": "Rome",
    "Japan": "Tokyo",
    "Australia": "Canberra",
    "India": "New Delhi",
    "Canada": "Ottawa",
    "United Kingdom": "London",
    "Berlin": "Germany",
    "Kabul": "Afghanistan",
    "Washington, D.C.": "USA",
    "Paris": "France",
    "Rome": "Italy",
    "Tokyo": "Japan",
    "Canberra": "Australia",
    "New Delhi": "India",
    "Ottawa": "Canada",
    "London": "United Kingdom"
};

function findAnswer() {
    const input = document.getElementById("countryCapitalInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (countryCapitalMap[input]) {
        resultDiv.textContent = countryCapitalMap[input];
    } else {
        resultDiv.textContent = "Sorry, I couldn't find that country or capital!";
    }
}
