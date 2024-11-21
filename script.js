document.getElementById('submit').addEventListener('click', function() {
    // Initialize all values to 0
    let p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 0, p7 = 0, p8 = 0;
    let w2 = 0, w3 = 0, w4 = 0, w5 = 0, w6 = 0, w7 = 0, w8 = 0;

    // Get input values
    const inputValue = parseFloat(document.getElementById('name').value) || 0;
    const selectedValue = document.getElementById('res').value;

    // Perform calculations based on the selected value
    switch (selectedValue) {
        case "T8":
            p8 = inputValue;
            w8 = 5 * p8; p7 = p8;
        case "T7":
            p7 = p7 || inputValue;
            w7 = 5 * p7; p6 = p7;
        case "T6":
            p6 = p6 || inputValue;
            w6 = 4 * p6; p5 = p6;
        case "T5":
            p5 = p5 || inputValue;
            w5 = 3 * p5; p4 = p5;
        case "T4":
            p4 = p4 || inputValue;
            w4 = 2 * p4; p3 = p4;
        case "T3":
            p3 = p3 || inputValue;
            w3 = 2 * p3; p2 = p3;
        case "T2":
            p2 = p2 || inputValue;
            w2 = 1 * p2;
            break;
        default:
            console.log("Invalid selection");
    }

    // Display the calculated values (for demonstration purposes)
    console.log(`w2: ${w2}, w3: ${w3}, w4: ${w4}, w5: ${w5}, w6: ${w6}, w7: ${w7}, w8: ${w8}`);
    document.getElementById("w2").innerHTML={w2};
    document.getElementById("w3").innerHTML={w3};
    document.getElementById("w4").innerHTML={w4};
    document.getElementById("w5").innerHTML={w5};
    document.getElementById("w6").innerHTML={w6};
    document.getElementById("w7").innerHTML={w7};
    document.getElementById("w8").innerHTML={w8};
    console.log(`p2: ${p2}, p3: ${p3}, p4: ${p4}, p5: ${p5}, p6: ${p6}, p7: ${p7}, p8: ${p8}`);
    document.getElementById("p2").innerHTML={p2};
    document.getElementById("p3").innerHTML={p3};
    document.getElementById("p4").innerHTML={p4};
    document.getElementById("p5").innerHTML={p5};
    document.getElementById("p6").innerHTML={p6};
    document.getElementById("p7").innerHTML={p7};
    document.getElementById("p8").innerHTML={p8};
});

// Additional logic for the second part of your requirements
document.querySelector('#submit').addEventListener('click', function() {
    const finalValue = parseFloat(document.getElementById('final').value) || 0;
    const compValue = parseFloat(document.getElementById('comp').value) || 0;
    const balValue = finalValue - compValue;

    // Display the balance value (for demonstration purposes)
    document.getElementById("bal").value={balValue};
    document.getElementById("name").value={finalValue};
    document.getElementById("comp").value={compValue};
    console.log(`Balance: ${balValue}`);
});

// Initialize all input fields to 0 on page load
window.onload = function() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
};
