function vibrate() {
    navigator.vibrate([500, 500, 500, 1000, 1000, 1000, 500, 500, 500])
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}