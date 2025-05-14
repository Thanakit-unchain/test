import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getMessaging, onMessage, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";
// import dotenv from "dotenv";

export default function initFirebase() {
    // dotenv.config()

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAj6lamU9O-hds-uelCbfiDVSUmSaLxvvc",
        authDomain: "myproject-b40b9.firebaseapp.com",
        projectId: "myproject-b40b9",
        storageBucket: "myproject-b40b9.firebasestorage.app",
        messagingSenderId: "887354787020",
        appId: "1:887354787020:web:562186b4730490212f6e69"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging(app);
    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        Notification.postMessage('Message received. ', payload);
    });

    onBackgroundMessage(messaging, (payload) => {
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
}