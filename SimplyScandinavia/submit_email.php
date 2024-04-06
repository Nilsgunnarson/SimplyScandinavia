<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the email address from the form submission
    $email = $_POST["email"];

    // Validate the email address (optional)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Open a file to append the email address (you can use a database instead)
        $file = fopen("emails.txt", "a");
        if ($file) {
            // Write the email address to the file
            fwrite($file, $email . "\n");
            fclose($file);
            echo "Email address added successfully!";
        } else {
            echo "Error: Unable to open file.";
        }
    } else {
        echo "Error: Invalid email address.";
    }
}
?>
