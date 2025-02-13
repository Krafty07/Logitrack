<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "logitrack_db";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve JSON data from POST body
$data = json_decode(file_get_contents("php://input"), true);

// Extract data
$senderName = $data['senderName'];
$pickupAddress = $data['pickupAddress'];
$senderContact = $data['senderContact'];
$recipientName = $data['recipientName'];
$deliveryAddress = $data['deliveryAddress'];
$recipientContact = $data['recipientContact'];
$packageType = $data['packageType'];
$weight = $data['weight'];
$length = $data['dimensions']['length'];
$width = $data['dimensions']['width'];
$height = $data['dimensions']['height'];
$specialInstructions = $data['specialInstructions'];
$paymentMethod = $data['paymentMethod'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO order (sender_name, pickup_address, sender_contact, recipient_name, delivery_address, recipient_contact, package_type, weight, length, width, height, special_instructions, payment_method) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssdffsss", $senderName, $pickupAddress, $senderContact, $recipientName, $deliveryAddress, $recipientContact, $packageType, $weight, $length, $width, $height, $specialInstructions, $paymentMethod);

// Execute and check if successful
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Order placed successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error placing order: " . $stmt->error]);
}

// Close connection
$stmt->close();
$conn->close();
?>