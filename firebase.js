import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getMessaging, onMessage } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";

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


    // const registerServiceWorker = async () => {
    //     if ("serviceWorker" in navigator) {
    //         try {
    //             const registration = await navigator.serviceWorker.register("/test/sw.js", {
    //                 scope: "/test/",
    //             });
    //             if (registration.installing) {
    //                 console.log("Service worker installing");
    //             } else if (registration.waiting) {
    //                 console.log("Service worker installed");
    //             } else if (registration.active) {
    //                 console.log("Service worker active");
    //             }
    //         } catch (error) {
    //             console.error(`Registration failed with ${error}`);
    //         }
    //     }
    // };

    // registerServiceWorker();
}