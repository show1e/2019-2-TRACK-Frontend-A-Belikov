/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if ( typeof(bytes) != "number" || typeof(bytes) == "number" && bytes < 0) return false;
  
  var i = 0;
  var byteSize = [' B', ' KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
  while (bytes >= 1024) {
    bytes = bytes / 1024;
    i++;
  }
  
  return parseFloat(bytes.toFixed(2)).toString() + byteSize[i];
  
}
