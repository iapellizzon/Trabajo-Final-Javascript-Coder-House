//ESTRUCTURA APP TEACHERS

class Teacher {
  constructor(nombre, apellido, estado, enFalta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado = estado;
    this.enFalta = enFalta;
  }
}

const teachers = [];

function showTeachers() {
  let nombre = document.getElementById("input-nombre").value;
  let apellido = document.getElementById("input-apellido").value;

  expresion = /\w+[a-z]/;

  if (nombre === "" || apellido === "") {
    alert("Completa todos los campos");
    return false;
  } else if (!expresion.test(nombre)) {
    alert("El nombre no es válido");
    return false;
  } else if (!expresion.test(apellido)) {
    alert("El apellido no es válido");
    return false;
  }

  let newTeacher = new Teacher(nombre, apellido);
  teachers.push(newTeacher);
  guardarLocalStorage();

  console.log(teachers);

  let list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < teachers.length; i++) {
    list.innerHTML += `  <div>
    <li>${teachers[i].nombre} ${teachers[i].apellido}</li>
    <select name="" id="">
      <option value="Licencia">Licencia</option>
      <option value="Enfermedad">Enfermedad</option>
      <option value="Presente">Presente</option>
    </select>
    </div>`;
  }
}

function guardarLocalStorage() {
  localStorage.setItem("teachers", JSON.stringify(teachers));
}

const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "¡Genial!",
    text: "¡TUS DATOS SE GUARDARON CON ÉXITO",
    icon: "success",
    confirmButtonText: "ACEPTAR",
  });
});

function bringProfessors() {
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      let html = "";
      json.forEach((professor) => {
        html += `
        <div>
        <p>NOMBRE: ${professor.nombre}<p>
        <p>APELLIDO: ${professor.apellido}<p>
        <select name="" id="">
      <option value="Licencia">Licencia</option>
      <option value="Enfermedad">Enfermedad</option>
      <option value="Presente">Presente</option>
    </select>
        </div>
        `;
      });
      document.getElementById("listado-professor").innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}

bringProfessors();
