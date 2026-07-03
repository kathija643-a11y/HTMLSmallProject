document.addEventListener("DOMContentLoaded", () => {
    const billSelect = document.querySelector("#quote select");
    const formContainer = document.querySelector(".form-container");

    const savingsDisplay = document.createElement("div");
    savingsDisplay.style.marginTop = "20px";
    savingsDisplay.style.padding = "15px";
    savingsDisplay.style.borderRadius = "5px";
    savingsDisplay.style.fontWeight = "bold";
    savingsDisplay.style.textAlign = "center";
    savingsDisplay.style.display = "none"; // Initially hidden

    const submitBtn = document.querySelector("form button");
    submitBtn.parentNode.insertBefore(savingsDisplay, submitBtn);

    function calculateSolarSavings() {
        const selectedValue = billSelect.value;
        let estimatedSavings = "";
        let backgroundColor = "#e8f5e9";
        let textColor = "#2e7d32";
        
        
        if (selectedValue.includes("R0 - R10000")) {
            estimatedSavings = "Estimated Monthly Savings: Up to R7,000!";
        } else if (selectedValue.includes("R10001 - R20000")) {
            estimatedSavings = "Estimated Monthly Savings: Up to R14,000!";
        } else if (selectedValue.includes("R20001 - R30000")) {
            estimatedSavings = "Estimated Monthly Savings: Up to R21,000!";
        } else if (selectedValue.includes("$30001+") || selectedValue.includes("R30001+")) {
            estimatedSavings = "Estimated Monthly Savings: R25,000+!";
            backgroundColor = "#fff3e0";  
            textColor = "#e65100";
        }

        if (estimatedSavings) {
            savingsDisplay.innerText = estimatedSavings;
            savingsDisplay.style.backgroundColor = backgroundColor;
            savingsDisplay.style.color = textColor;
            savingsDisplay.style.display = "block";
        }
    } 

    billSelect.addEventListener("change", calculateSolarSavings);
});