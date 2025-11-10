/*Copilot said: The log is clear: your built image => "CrashLoopBackOff"
The log is clear: your built image has no "start" script, so the container starts npm which immediately errors and exits — hence CrashLoopBackOff. You need a long‑running process that serves the built files (dist/) and listens on the container PORT.

Two easy options (pick one):

Option A — quick fix (recommended): add a tiny Node static server and a start script

Add server.js in the project folder (first-react) and update package.json to include "start": "node server.js".
Commit & push, then trigger a new build: oc start-build my-react-app --follow

Commands to run locally (or in your repo):

git add first-react/server.js first-react/package.json
git commit -m "Add express static server and start script for OpenShift runtime"
git push origin main
Then on OpenShift:

oc start-build my-react-app --follow
oc get pods -l app=my-react-app
oc logs -f pod/<pod-name>
*/
/**
 * After adding this server.js file, update package.json to include:
 * {
  "name": "first-react",
  "version": "0.0.0",
  "scripts": {
    "build": "vite build",
    "start": "node server.js",
    "dev": "vite"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  ...
}
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// For client-side routing, always serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});