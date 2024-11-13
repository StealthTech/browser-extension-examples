// Метод onRuleMatchedDebug доступен в распакованных расширениях
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((event) => {
    console.log(`[Вкладка ${event.request.tabId}] Произошел редирект на страницу ${event.request.url}`);
});

console.log('Подключен Service Worker');