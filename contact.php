<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $country_code = $_POST['country_code'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $message = $_POST['message'];
    
    // Recipient email
    $to = "your-email@example.com"; // Replace with your email
    
    // Email subject
    $subject = "New Contact Form Submission from $name";
    
    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $country_code$phone\n";
    $email_content .= "Address: $address\n\n";
    $email_content .= "Message:\n$message";
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Try to send email
    if (mail($to, $subject, $email_content, $headers)) {
        $response = array(
            "status" => "success",
            "message" => "Thank you for your message. We'll get back to you soon!"
        );
    } else {
        $response = array(
            "status" => "error",
            "message" => "Sorry, there was an error sending your message. Please try again later."
        );
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?> 