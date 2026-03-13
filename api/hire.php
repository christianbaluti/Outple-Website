<?php
/**
 * Hire Team Form Handler
 * Receives talent request submissions from the HireTeam page
 */

require_once __DIR__ . '/mailer.php';

// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.'
    ]);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$requiredFields = ['company', 'name', 'email', 'role'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields: ' . implode(', ', $missingFields)
    ]);
    exit();
}

// Sanitize input
$company = htmlspecialchars(strip_tags(trim($data['company'])));
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags(trim($data['phone'] ?? '')));
$role = htmlspecialchars(strip_tags(trim($data['role'])));
$timeline = htmlspecialchars(strip_tags(trim($data['timeline'] ?? 'Not specified')));
$message = htmlspecialchars(strip_tags(trim($data['message'] ?? '')));

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address format.'
    ]);
    exit();
}

// Build email content
$emailSubject = "[Outple Hire Request] $company - $role";

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a0533, #3d1078); color: white; padding: 25px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h2 { margin: 0; font-size: 22px; }
        .content { padding: 25px; background: #f9f9f9; }
        .field { margin-bottom: 18px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .field:last-child { border-bottom: none; }
        .label { font-weight: bold; color: #432d7e; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { margin-top: 5px; font-size: 15px; }
        .highlight { background: #432d7e; color: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .highlight .label { color: rgba(255,255,255,0.7); }
        .highlight .value { color: white; font-size: 18px; font-weight: bold; }
        .footer { padding: 15px; text-align: center; font-size: 12px; color: #666; background: #f0f0f0; border-radius: 0 0 8px 8px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🎯 New Talent Request</h2>
        </div>
        <div class='content'>
            <div class='highlight'>
                <div class='label'>Role(s) Required</div>
                <div class='value'>$role</div>
            </div>
            <div class='field'>
                <div class='label'>Company</div>
                <div class='value'>$company</div>
            </div>
            <div class='field'>
                <div class='label'>Contact Name</div>
                <div class='value'>$name</div>
            </div>
            <div class='field'>
                <div class='label'>Email</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            <div class='field'>
                <div class='label'>Phone</div>
                <div class='value'>" . ($phone ?: 'Not provided') . "</div>
            </div>
            <div class='field'>
                <div class='label'>Hiring Timeline</div>
                <div class='value'>$timeline</div>
            </div>
            <div class='field'>
                <div class='label'>Additional Requirements</div>
                <div class='value'>" . ($message ? nl2br($message) : 'None specified') . "</div>
            </div>
        </div>
        <div class='footer'>
            This request was submitted via the Outple website Hire Team form.
        </div>
    </div>
</body>
</html>
";

// Send email
$emailResult = sendEmail(TO_EMAIL, $emailSubject, $emailBody, $email, $name);

// Log submission
$submissionData = [
    'company' => $company,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'role' => $role,
    'timeline' => $timeline,
    'message' => $message,
    'email_sent' => $emailResult['success']
];

logSubmission('hire', $submissionData);

// Return success response (we return success even if email fails because submission is logged)
echo json_encode([
    'success' => true,
    'message' => 'Thank you for your request. Our team will contact you within 24 hours.'
]);
