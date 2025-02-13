document.getElementById('tracking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const trackingNumber = document.getElementById('tracking-number').value;
    const resultContent = document.getElementById('result-content');
    const trackingResult = document.getElementById('tracking-result');

    // Simulate an API call with mock data
    const mockData = {
        "12345": "Your package is in transit and will arrive by 2023-10-30.",
        "67890": "Your package has been delivered successfully.",
        "54321": "Your package is currently at the sorting facility.",
        "99999": "Tracking number not found. Please verify and try again."
    };

    resultContent.innerText = mockData[trackingNumber] || mockData["99999"];
    trackingResult.classList.remove('hidden');
});