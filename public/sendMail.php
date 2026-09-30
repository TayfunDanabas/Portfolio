<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = htmlspecialchars(trim($params->name ?? ''));
        $email = filter_var($params->email ?? '', FILTER_VALIDATE_EMAIL);
        $message = nl2br(htmlspecialchars(trim($params->message ?? '')));

        if (!$name || !$email || !$message) {
            http_response_code(400);
            exit;
        }

        $recipient = 'danabas285@gmail.com';
        $subject = "Kontaktanfrage von <$email>";
        $content = "Von: $name<br>E-Mail: $email<br><br>$message";

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = 'From: noreply@' . $_SERVER['SERVER_NAME'];
        $headers[] = "Reply-To: $email";

        if (!mail($recipient, $subject, $content, implode("\r\n", $headers))) {
            http_response_code(500);
        }
        break;
    default:
        header('Allow: POST', true, 405);
        exit;
}
