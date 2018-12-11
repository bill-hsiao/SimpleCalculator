export default function operation(obj, operator) {
  if (operator === '+') {
    console.log(obj.val ++);
    return {
      val: obj.val ++
    }
  }
  if (operator === '-') {
    return {
      val: obj.val --
    }
  }
}
