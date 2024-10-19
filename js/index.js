// codigo js
function calcular() {
  let base = document.getElementById("valorB").value
  let altura = document.getElementById("valorH").value
  let resultado = document.getElementById("result")

  if (base === "") {
    alerta("Advertencia", "La base no puede ir en blanco", "warning")
  } else if (altura === "") {
    alerta("Advertencia", "La altura no puede ir en blanco", "warning")
  } else {
    let B = parseInt(base)
    let H = parseInt(altura)

    if (B <= 0) {
      alerta("Advertencia", "La Base(B) ingresada debe ser positiva", "warning")
    } else if (H <= 0) {
      alerta("Advertencia", "La Altura(H) ingresada debe ser positiva", "warning")
    } else {
      let area = B * H
      resultado.value = area
    }
  }
}
function limpiar() {
  document.getElementById("valorB").value = ""
  document.getElementById("valorH").value = ""
  document.getElementById("result").value = ""
}
function alerta(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  })
}
