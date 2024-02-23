// server.js
const express = require('express');
const cors = require('cors');
const connectDataBase = require('./db/mongodb');
const Routes = require('./routes/routes');
const path = require('path');

const httpProxy = require('http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Utilisez CORS middleware
app.use(cors());

connectDataBase();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/pages/home.html'));
});

/*
// Créez un serveur proxy
const proxy = httpProxy.createProxyServer({});
// Redirigez les requêtes vers l'API
app.all('/law/*', (req, res) => {
    // Masquez l'URL de l'API
    const targetUrl = 'http://127.0.0.1:3000/api';

    // Redirigez la requête vers l'URL de l'API
    proxy.web(req, res, { target: targetUrl });
});

proxy.on('error', (err, req, res) => {
    console.error('Proxy error:', err);
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});
*/



/*


// Middleware pour masquer une partie de l'URL
app.use((req, res, next) => {
    // Extraire la partie de l'URL à masquer
    const maskedPart = req.path.split('/')[1];
    // Supprimer la partie masquée de l'URL
    req.url = req.url.replace(`/${maskedPart}`, '');
    // Passer au middleware suivant
    next();
});

// Configurez le proxy inverse pour rediriger les requêtes vers l'URL cible
const proxyOptions = {
    target: `http://127.0.0.1:${PORT}`, // URL cible à masquer
    changeOrigin: true,
    pathRewrite: {
      '^/': '', // Supprimez le préfixe '/proxy' de l'URL avant de rediriger
    },
};
// Utilisez le middleware de proxy pour toutes les requêtes commençant par '/proxy'
app.use('/proxy', createProxyMiddleware(proxyOptions));

*/


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use(Routes);
