(function (b, a) {
    function c(d) {
        var e = "";
        e += `
            if (document.getElementById("debugCSS") && document.getElementById("debugJS") ) {
                document.getElementsByTagName("head")[0].removeChild(document.getElementById("debugCSS"));
                document.getElementsByTagName("head")[0].removeChild(document.getElementById("debugJS"));
                document.getElementsByTagName("body")[0].removeChild(document.getElementById("debugCSSInfoBar"));
            } else {debugCSS = document.createElement("link");
                debugCSS.rel = "stylesheet";
                debugCSS.type = "text/css";
                debugCSS.href = chrome.extension.getURL("/style.min.css");
                debugCSS.id = "debugCSS";
                document.getElementsByTagName("head")[0].appendChild(debugCSS);
                debugJS = document.createElement("script");
                debugJS.type = "text/javascript";
                debugJS.src = chrome.extension.getURL("/script.js");
                debugJS.id = "debugJS";
                document.getElementsByTagName("head")[0].appendChild(debugJS);
                debugCSSInfoBar = document.createElement("div"),
                debugCSSInfoBar.id = "debugCSSInfoBar",
                document.getElementsByTagName("body")[0].appendChild(debugCSSInfoBar)
            }
        `;
        chrome.tabs.executeScript({code: e})
    }

    chrome.commands.onCommand.addListener(function (d) {
        c(d)
    });
    chrome.browserAction.onClicked.addListener(function (d) {
        c(d)
    })
}(window, document));