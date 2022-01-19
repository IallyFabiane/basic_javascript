const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(0 + tresHoras); //Timestamp do unix
console.log(data.toString());
const data2 = new Date();
console.log(data2);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getUTCMilliseconds());
console.log('Dia da Semana', data.getDay());