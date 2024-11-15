# Примеры для создания расширения для Google Chrome

Данный репозиторий содержит примеры кода для быстрого создания собственного браузерного расширения.

## Структура расширения

```
src/
├── views/
├──── popup/ — страница настройки всплывающего попапа
├────── assets/ — папка с ресурсами
├────── components/ — компоненты для всплывающего попапа
├──────── App/ — корневой компонент
├────────── App.css — стили для компонента
├────────── App.tsx — бизнес-логика
├────── index.html — точка входа в options
├────── index.css — общие для options
├────── main.tsx — подключение React-приложения
├──── options/ — страница настройки параметров расширения
├────── assets/ — папка с ресурсами
├────── components/ — компоненты для страницы настроек
├──────── App/ — корневой компонент
├────────── App.css — стили для компонента
├────────── App.tsx — бизнес-логика
├────── index.html — точка входа в options
├────── index.css — общие для options
├────── main.tsx — подключение React-приложения
├── public/ — статические файлы
└──── manifest.json — файл манифеста для настройки расширения
```

Отдельно в `scripts/release.js` лежит создание архива с запакованным расширением.

## Установка

1. Клонируйте репозиторий
2. Выполните команды:

```bash
nvm use
npm install
npm run build
```

3. Откройте Google Chrome
4. Перейдите на [chrome://extensions/](chrome://extensions/)
5. Нажмите на "Загрузить распакованное расширение"
6. Укажите путь до папки `dist`
7. Расширение добавит интерфейсы в панель рядом с адресной строкой, в параметры расширения и инструменты разработчика; вместе с этим над страницами появится счётчик ссылок, а страница https://www.google.com/#redirect-test будет автоматически перенаправлять на https://www.google.com/#redirect-success

## Дополнительные материалы
- [Большое количество примеров на использование отдельных API](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples)
- [Неприлично большое количество примеров прикладных сниппетов с использованием комбинаций API](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples)