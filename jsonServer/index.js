const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const http = require('http');
const https = require('https');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального API
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromDb = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromDb) {
      return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});

// Проверяем, авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth error' });
  }

  next();
});

server.use(router);

// Запуск сервера
try {
  const PORT = 8443;

  const options = {
    key: fs.readFileSync(
      '/etc/letsencrypt/live/production-project.irinaarinushkina.com-0001/privkey.pem',
    ),
    cert: fs.readFileSync(
      '/etc/letsencrypt/live/production-project.irinaarinushkina.com-0001/cert.pem',
    ),
  };

  const httpsServer = https.createServer(options, server);

  httpsServer.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
  });
} catch (err) {
  console.log(`error when starting https server: ${err}`);
}

// для локального запуска
const HTTP_PORT = 8000;

const httpServer = http.createServer(server);

httpServer.listen(HTTP_PORT, () => {
  console.log(`Server is running on ${HTTP_PORT} port`);
});
