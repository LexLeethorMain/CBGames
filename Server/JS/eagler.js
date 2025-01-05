const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs');

// SSL Certificates
const privateKey = fs.readFileSync('/home/node/app/CBGames/Server/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/home/node/app/CBGames/Server/fullchain.pem', 'utf8');

// Target servers
const targets = {
  9093: { http: 'http://192.168.50.142:8081', ws: 'ws://192.168.50.142:8081' },
  25577: { http: 'http://192.168.50.142:25577', ws: 'ws://192.168.50.142:25577' },
  80: { http: 'http://192.168.50.142:1243', ws: 'ws://192.168.50.142:1243' },
};

// Create a proxy server
const proxy = httpProxy.createProxyServer({ ws: true });

// Create servers for each port
Object.entries(targets).forEach(([port, target]) => {
  const proxyServer = https.createServer({ key: privateKey, cert: certificate }, (req, res) => {
    console.log(`Forwarding HTTPS request for ${req.url} to ${target.http}`);
    proxy.web(req, res, { target: target.http, changeOrigin: true, secure: false }, (err) => {
      if (err) {
        console.error(`Error forwarding HTTP request for ${req.url}: ${err.message}`);
        res.statusCode = 500;
        res.end('Failed to forward HTTP request');
      }
    });
  });

  // WebSocket handling
  proxyServer.on('upgrade', (req, socket, head) => {
    console.log(`Forwarding WebSocket upgrade request for ${req.url} to ${target.ws}`);
    proxy.ws(req, socket, head, { target: target.ws }, (err) => {
      if (err) {
        console.error(`Error forwarding WebSocket request for ${req.url}: ${err.message}`);
        socket.end();
      }
    });
  });

  // Start listening
  proxyServer.listen(port, '0.0.0.0', () => {
    console.log(`Proxy server listening on https://0.0.0.0:${port}`);
  });
});
