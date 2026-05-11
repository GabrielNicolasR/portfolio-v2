export function renderErrorPage() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Error</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background-color: #030303;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        p {
            color: #a1a1aa;
            margin-bottom: 2rem;
        }
        a {
            color: #ffffff;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Something went wrong</h1>
        <p>A server error occurred. Please try again later.</p>
        <a href="/">Back to safety</a>
    </div>
</body>
</html>
`;
}
