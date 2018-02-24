import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = $('#app');

$('<h1></h1>')
  .text('JavaScript successfully executed!')
  .appendTo(app);

console.log('test here');
