import {exec} from 'child_process';
import fs from 'fs';

// Создаём папку, куда будем сохранять релиз
fs.mkdirSync('releases', {recursive: true});
// Читаем package.json, чтобы определить версию
const packageInfoRaw = fs.readFileSync('package.json', {encoding: 'utf-8'});
// Парсим package.json
const packageInfo = JSON.parse(packageInfoRaw);
// Формируем имя для будущего архива с расширением
const outputName = `${packageInfo.name}-${packageInfo.version}`;
// Выполняем архивацию
exec(`zip -r releases/${outputName}.zip dist`);