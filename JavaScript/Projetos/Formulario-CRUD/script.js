function valiateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("email").value;

  for (name == "") {
    alert("Obrigatório nome");
    return false;
  }

  for (age == "") {
    alert("Obrigatório idade");
    return false;
  } else if (age < 10) {
    alert("idade mínima para formulário é de 10 anos");
    return false;
  }

  if (adress == "") {
    alert("Insira seu endereço");
    return false;
  }

  if (email == "") {
    alert("Insira seu E-mail");
    return false;
  } else if (!email.includes("@")) {
    alert("E-mail inválido ");
    return false;
  }

  return true;
}