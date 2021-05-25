const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({ 
    target: 'https://explorer-api.iota.org', 
    changeOrigin: true, 
    onProxyRes: function (proxyRes) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    },
    logLevel: 'debug' 
}));
app.listen(process.env.PORT || 5000);
