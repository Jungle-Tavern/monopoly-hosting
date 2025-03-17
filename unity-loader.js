var buildUrl = "Build";
var loaderUrl = buildUrl + "/monopoly-hosting.loader.js";
var config = {
  dataUrl: buildUrl + "/monopoly-hosting.data.unityweb",
  frameworkUrl: buildUrl + "/monopoly-hosting.framework.js.unityweb",
  codeUrl: buildUrl + "/monopoly-hosting.wasm.unityweb",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Jungle Tavern",
  productName: "Richie - Metapolis Mayor",
  productVersion: "1.1.1",
};

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  const playdeckBridgeInstance = playDeckBridge();
  createUnityInstance(document.querySelector("#unity-canvas"), config, (progress) => {
    setProgress(progress * 50);
  })
    .then((unityInstance) => {
      document.getElementById("unity-container").style.display = "block";
      window.unityInstance = unityInstance;
      playdeckBridgeInstance?.init(unityInstance);
      init(unityInstance);
      if (userId) {
        unityInstance.SendMessage("TelegramManager", "OnReceiveUserId", JSON.stringify(userId));
        unityInstance.SendMessage("TelegramManager", "OnReceiveUserName", JSON.stringify(user.first_name + " " + user.last_name));
      } else {
        unityInstance.SendMessage("TelegramManager", "OnReceiveUserId", "-1");
        unityInstance.SendMessage("TelegramManager", "OnReceiveUserName", "Fluffy Mayor");
      }
    })
    .catch((message) => {
      console.error("Error creating Unity instance:", message);
    });
};
document.body.appendChild(script);