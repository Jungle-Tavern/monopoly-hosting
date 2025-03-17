let _unityInstance;

function showRewarded() {
    show_9040716().then(() => {
        window.focus();
        _unityInstance.SendMessage("AdvertisingService", "RewardedShown");
    }).catch(error => {
        console.error('Error showing ad:', error);
    });
}

function init(unityInstance) {
    _unityInstance = unityInstance;
}