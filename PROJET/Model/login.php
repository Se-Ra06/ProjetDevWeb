<?php 
require 'db.php';
session_start();

<?php
session_start();
require 'auth.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $user = loginUser($pdo, $email, $password);

    if ($user) {
        // Store user data in session
        $_SESSION["user"] = $user;
        $_SESSION["role"] = $user['user_type'];
        
        // Send success response with redirect
        echo json_encode([
            "success" => true,
            "redirect" => ($user['user_type'] === 'admin') ? 'View/admin.html' : 
                         (($user['user_type'] === 'student') ? 'student.php' : 'pilot.php'),
            "message" => "Login successful"
        ]);
        exit;
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Invalid credentials"
        ]);
        exit;
    }
}
?>