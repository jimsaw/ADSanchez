const express = require('express');
const path= require('path');
const app= express();

nm
app.use(express.static('./dist/adsanchez'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/adsanchez/'}
  );
  });
  app.listen(process.env.PORT || 8080);