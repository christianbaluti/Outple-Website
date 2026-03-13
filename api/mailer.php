<?php
/**
 * SMTP Mailer Class using PHPMailer
 * Handles email sending with SMTP authentication
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/config.php';

// Check if PHPMailer is installed via Composer
$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (file_exists($autoloadPath)) {
    require $autoloadPath;
}

/**
 * Send an email using SMTP
 * 
 * @param string $toEmail Recipient email address
 * @param string $subject Email subject
 * @param string $htmlBody HTML email body
 * @param string $replyToEmail Reply-to email address
 * @param string $replyToName Reply-to name
 * @return array ['success' => bool, 'message' => string]
 */
function sendEmail($toEmail, $subject, $htmlBody, $replyToEmail = null, $replyToName = null) {
    // Check if PHPMailer class exists
    if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        // Fallback to native mail() function
        return sendEmailNative($toEmail, $subject, $htmlBody, $replyToEmail, $replyToName);
    }
    
    $mail = new PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USERNAME;
        $mail->Password   = SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = SMTP_PORT;
        
        // Recipients
        $mail->setFrom(FROM_EMAIL, FROM_NAME);
        $mail->addAddress($toEmail);
        
        if ($replyToEmail) {
            $mail->addReplyTo($replyToEmail, $replyToName ?? $replyToEmail);
        }
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlBody));
        
        $mail->send();
        
        return [
            'success' => true,
            'message' => 'Email sent successfully'
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => "Mailer Error: {$mail->ErrorInfo}"
        ];
    }
}

/**
 * Fallback: Send email using native mail() function
 */
function sendEmailNative($toEmail, $subject, $htmlBody, $replyToEmail = null, $replyToName = null) {
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . FROM_NAME . ' <' . FROM_EMAIL . '>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    if ($replyToEmail) {
        $replyToHeader = $replyToName ? "$replyToName <$replyToEmail>" : $replyToEmail;
        $headers[] = "Reply-To: $replyToHeader";
    }
    
    $sent = mail($toEmail, $subject, $htmlBody, implode("\r\n", $headers));
    
    return [
        'success' => $sent,
        'message' => $sent ? 'Email sent successfully' : 'Failed to send email'
    ];
}

/**
 * Log submission to file
 */
function logSubmission($type, $data) {
    $submissionsDir = API_DIR . '/submissions';
    
    if (!is_dir($submissionsDir)) {
        mkdir($submissionsDir, 0755, true);
    }
    
    $filename = date('Y-m-d_H-i-s') . '_' . $type . '_' . uniqid() . '.json';
    $filepath = $submissionsDir . '/' . $filename;
    
    $logData = array_merge([
        'timestamp' => date('Y-m-d H:i:s'),
        'type' => $type
    ], $data);
    
    file_put_contents($filepath, json_encode($logData, JSON_PRETTY_PRINT));
    
    return $filepath;
}
