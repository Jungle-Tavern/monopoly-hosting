const tg = window.Telegram.WebApp;
tg.expand();
const initDataUnsafe = tg.initDataUnsafe;
const user = initDataUnsafe.user;
const userId = user ? user.id : null;