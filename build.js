const fs = require('fs');

const HEADER = fs.readFileSync("src/templates/header.html", "utf8");
const FOOTER = fs.readFileSync("src/templates/footer.html", "utf8");

readDir("src/pages");

function readDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const path = `${dir}/${file}`;
        if (fs.statSync(path).isDirectory()) {
            readDir(path);
        } else {
            if (file.endsWith(".html")) {
                const content = fs.readFileSync(path, "utf8").replaceAll("/cdn/", "https://media.cpadventure.net/assets/");
                const html = HEADER + content + FOOTER;
                const dest = path.replace("src/pages", "dist");
                if (!fs.existsSync(dest.replace(file, ""))) {
                    fs.mkdirSync(dest.replace(file, ""), { recursive: true });
                }
                fs.writeFileSync(dest, html);
            }
        }
    })
}