import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { usePersonalApp } from "../context/usePersonalApp";

export const PersonalForm = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [edad, setEdad] = useState("");
  const [salario, setSalario] = useState("");
  const [nameError, setNameError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [cargoError, setCargoError] = useState(false);
  const [edadError, setEdadError] = useState(false);
  const { addPersonal } = usePersonalApp();

  useEffect(() => {
    // Definir el salario por defecto según el cargo
    switch (cargo) {
      case "Gerente":
        setSalario(4000000 + 1500000 + 2000000);
        break;
      case "Administrativo":
        setSalario(1300000 + 1100000);
        break;
      case "Ayudante De Bodega":
        setSalario(1200000);
        break;
      default:
        setSalario("");
        break;
    }
  }, [cargo]);

  const showmessage = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      footer: '<a href="#">Falta Completar Un Campo Requerido</a>',
    });
  };

  const handleClick = () => {
    if (!name) {
      setNameError(true);
      showmessage("el nombre es requerido");
      return;
    } else {
      setNameError(false);
    }
    if (!apellido) {
      setApellidoError(true);
      showmessage("el apellido es requerido");
      return;
    } else {
      setApellidoError(false);
    }
    if (!cargo) {
      setCargoError(true);
      showmessage("el cargo es requerido");
      return;
    } else {
      setCargoError(false);
    }
    if (!edad) {
      setEdadError(true);
      showmessage("la edad es requerida");
      return;
    } else {
      setEdadError(false);
    }
    if (!edadError && !apellidoError && !cargoError && !nameError) {
      const nuevoEmpleado = {
        name,
        apellido,
        cargo,
        edad: parseInt(edad),
        salario: parseFloat(salario),
      };
      addPersonal(nuevoEmpleado);

      Swal.fire({
        title: "GUARDADO SATISFACTORIAMENTE.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      });

      // Limpiar los campos después de enviar
      setName("");
      setApellido("");
      setCargo("");
      setEdad("");
      setSalario("");
    }
  };

  return (
    <>
      <h4>
        Sistema <br />
        Gestion Empleados{" "}
      </h4>
      <br />
      <form id="formularioPersonal">
        <label className="form-group"> Nombre: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="ingresa el nombre"
          className={`form-control text-primary ${
            nameError ? "is-invalid" : ""
          }`}
          autoComplete="on"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        {/* {nameError &&
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El nombre es requerido.",
            footer: '<a href="#">Falta Completar Un Campo Requerido</a>',
          })} */}

        <br />

        <label className="form-group"> Apellido: </label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="ingresa el apellido"
          className={`form-control text-primary ${
            apellidoError ? "is-invalid" : ""
          }`}
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          required
        />
        <br />

        <label className="form-label"> Cargo:</label>
        <select
          type="text"
          name="cargo"
          id="cargo"
          className={`form-control ${cargoError ? "is-invalid" : ""}`}
          value={cargo}
          onChange={(event) => setCargo(event.target.value)}
          required
        >
          <option value="" disabled>
            Seleccione un cargo
          </option>
          <option value="Gerente">Gerente</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Ayudante De Bodega">Ayudante De Bodega</option>
        </select>
        <br />

        <label className="form-group">Edad</label>
        <input
          type="number"
          name="Edad"
          id="edad"
          className={`form-control ${edadError ? "is-invalid" : ""}`}
          value={edad}
          onChange={(event) => setEdad(event.target.value)}
          required
        />
      </form>
      <br />
      <button onClick={handleClick} type="button" className="btn btn-primary">
        Guardar
      </button>
    </>
  );
};

PersonalForm.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default PersonalForm;
