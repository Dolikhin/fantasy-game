
import Team from './src/js/Team.js';
import Character from './src/js/character.js';
import Bowman from './src/js/bowman.js';
import Swordsman from './src/js/Swordsman.js';
import Magician from './src/js/Magician.js';
import './src/css/style.css';

// index.js
import ErrorRepository from './src/js/ErrorRepository.js';

const errorRepo = new ErrorRepository();

// Добавляем ошибки в репозиторий
errorRepo.addError(404, 'Not Found');
errorRepo.addError(500, 'Internal Server Error');
errorRepo.addError(403, 'Forbidden');

// Пример перевода кода ошибки
console.log(errorRepo.translate(404)); // Output: Not Found
console.log(errorRepo.translate(500)); // Output: Internal Server Error
console.log(errorRepo.translate(403)); // Output: Forbidden
console.log(errorRepo.translate(123)); // Output: Unknown error



