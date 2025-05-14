import { getMessaging as sw_getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-sw.js";

const sw_messaging = sw_getMessaging(app);
onBackgroundMessage(sw_messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    Notification.postMessage('Message received. ', payload);
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});