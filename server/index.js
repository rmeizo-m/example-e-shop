import app from './express';

app.listen(app.get('port'), () => {
  console.log(`
    ------------------------------
    🌍  GOTO http://localhost:${app.get('port')}
    ------------------------------
  `);
});
