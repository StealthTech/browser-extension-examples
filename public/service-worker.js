// Метод onRuleMatchedDebug доступен в распакованных расширениях
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((event) => {
    console.log(`[Вкладка ${event.request.tabId}] Произошел редирект на страницу ${event.request.url}`);
});

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
    console.log(`Используем внедрение скрипта на страницу ${url}`);
    await chrome.scripting.executeScript({
        target: { tabId },
        files: ['scripting-topline.js'],
    });
});

console.log('Подключен Service Worker');