<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['query'])) {
    $query = urlencode($_GET['query']);
    $apiKey = '76af66e29aad9989375165d5fd3acd569365225b';
    $url = "https://www.giantbomb.com/api/search/?api_key={$apiKey}&format=json&query={$query}";

    $response = file_get_contents($url);

    if ($response === false) {
        echo json_encode([]);
    } else {
        $data = json_decode($response, true);

        $suggestions = [];

        if (isset($data['results'])) {
            foreach ($data['results'] as $result) {
                if (isset($result['name'])) {
                    $suggestions[] = ['name' => $result['name']];
                }
            }
        }

        echo json_encode($suggestions);
    }
} else {
    echo json_encode([]);
}
?>