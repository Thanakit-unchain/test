importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAj6lamU9O-hds-uelCbfiDVSUmSaLxvvc",
    authDomain: "myproject-b40b9.firebaseapp.com",
    projectId: "myproject-b40b9",
    storageBucket: "myproject-b40b9.firebasestorage.app",
    messagingSenderId: "887354787020",
    appId: "1:887354787020:web:562186b4730490212f6e69"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    Notification.postMessage('Message received. ', payload);
    self.registration.showNotification(notificationTitle, notificationOptions);
});