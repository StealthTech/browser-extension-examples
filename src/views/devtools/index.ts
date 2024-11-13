chrome.devtools.panels.create('Тестовое расширение', 'icon.png', '/src/views/devtools/main/index.html', panel => {
    console.log('Панель успешно подключена', panel);
});
