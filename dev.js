const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 2999;

const HEADER = fs.readFileSync("src/templates/header.html", "utf8");
const FOOTER = fs.readFileSync("src/templates/footer.html", "utf8");

// Serve static files from the 'cdn' directory
app.use('/cdn', express.static(path.join(__dirname, 'cdn')));

// Middleware to handle requests for HTML pages
app.get('/:page?', (req, res) => {
    const page = req.params.page || "";
    const filePath = path.join(__dirname, 'src/pages', `${page}/index.html`);

    // Read the page content, wrap it with HEADER and FOOTER, and serve it
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).send('Page not found');
            }
            return res.status(500).send('Internal Server Error');
        }
        res.send(HEADER + content + FOOTER);
    });
});

// Start the server
app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`);
});
