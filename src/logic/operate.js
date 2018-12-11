export default function operation(obj, operator) {
  if (operator === '+') {
    console.log(obj.val ++);
    return {
      init: null,
      val: obj.val ++
    }
  }
  if (operator === '-') {
    return {
      init: null,
      val: obj.val --
    }
  }
}
