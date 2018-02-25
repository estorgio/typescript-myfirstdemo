import * as $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getWeather } from './weather';

const app = $('#app');

printMessage('JavaScript successfully executed!');

console.log('test here');

showWeather();

function printMessage(message: string): void {
  $('<p></p>')
    .text(message)
    .appendTo(app);
}

function showWeather() {
  getWeather('davao')
    .then((response) => {
      if (!response) return;
      const {title, condition} = response.query.results.channel.item;
      printMessage(title);
      printMessage(condition.date);
      printMessage(`${condition.temp}°C ${condition.text}`);
    })
    .catch((error) => console.error(error));
}