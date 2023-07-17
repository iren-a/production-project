const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

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
const PORT = 8443;
const httpsServer = https.createServer(options, server);

httpsServer.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
