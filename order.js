document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const senderName = document.getElementById("sender-name").value.trim();
    const pickupAddress = document.getElementById("pickup-address").value.trim();
    const senderContact = document.getElementById("sender-contact").value.trim();
    const recipientName = document.getElementById("recipient-name").value.trim();
    const deliveryAddress = document.getElementById("delivery-address").value.trim();
    const recipientContact = document.getElementById("recipient-contact").value.trim();
    const packageType = document.getElementById("package-type").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const length = parseFloat(document.querySelector(".dimensions #length").value);
    const width = parseFloat(document.querySelector(".dimensions #width").value);
    const height = parseFloat(document.querySelector(".dimensions #height").value);
    const specialInstructions = document.getElementById("special-instructions").value.trim();
    const paymentMethod = document.getElementById("payment-method").value;

    if (!senderName || !pickupAddress || !senderContact || !recipientName || !deliveryAddress || !recipientContact || isNaN(weight) || isNaN(length) || isNaN(width) || isNaN(height)) {
        alert("Please fill out all required fields with valid data.");
        return;
    }

    // Mock API URL (for demonstration purposes)
    const apiUrl = "http://localhost/LogiTrack/submit_order.php"; // Adjust as needed for actual endpoint

    // Data to send in the POST request
    const orderData = {
        senderName,
        pickupAddress,
        senderContact,
        recipientName,
        deliveryAddress,
        recipientContact,
        packageType,
        weight,
        dimensions: {
            length,
            width,
            height
        },
        specialInstructions,
        paymentMethod
    };
    console.log(orderData);

    // Send mock API request
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        console.log("Order placed successfully:", data);
        alert("Order placed successfully!");
    })
    .catch(error => {
        console.error("Error placing order:", error);
        alert("There was an error placing your order. Please try again.");
    });
});