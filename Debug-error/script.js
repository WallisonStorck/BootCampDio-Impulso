function validateArray(arr, num) {
  try {
    if (!arr && !num) throw ReferenceError("Envie os parâmetros!");

    if (typeof arr !== "object")
      throw TypeError("Envie um elemento do tipo Array!");

    if (typeof num !== "number")
      throw TypeError("Envie um elemento do tipo Number!");

    if (arr.length !== num) throw RangeError("Array com tamanho inválido!");

    console.log("Array validado com sucesso!");
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log("ReferenceError");
      console.log(err);
    }
    if (err instanceof TypeError) {
      console.log("TypeError");
      console.log(err);
    }
    if (err instanceof RangeError) {
      console.log("RangeError");
      console.log(err);
    }
  }
}

window.onload = () => {
  console.log("Script is running!");

  validateArray([3, 2, 1, 0]);
};
