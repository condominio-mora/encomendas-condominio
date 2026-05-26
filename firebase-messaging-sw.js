// firebase-messaging-sw.js
// Coloque na RAIZ do projeto (mesma pasta do index.html)

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:            "AIzaSyAgoXGf9Eyh3L4DLXwzRtNAq35PZpy748w",
  authDomain:        "encomendas-condominio.firebaseapp.com",
  projectId:         "encomendas-condominio",
  storageBucket:     "encomendas-condominio.firebasestorage.app",
  messagingSenderId: "568905816585",
  appId:             "1:568905816585:web:ec1fd4fa78453247b136d8",
});

const messaging = firebase.messaging();

// Recebe notificações com app em background ou fechado
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon:  "/icon-192.png",
    badge: "/icon-72.png",
    tag:   "encomenda",
    data:  payload.data,
  });
});

// Clique na notificação abre o app
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
