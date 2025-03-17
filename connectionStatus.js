function getInternetConnectionStatus() {
    return navigator.onLine ? 'Online' : 'Offline';
}

function handleConnectionChange() {
    const status = getInternetConnectionStatus();
    console.log(`Internet connection status: ${status}`);
}

window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);