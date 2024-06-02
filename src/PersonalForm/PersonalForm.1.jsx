import { PropTypes } from "prop-types";
import { useState } from "react";

// eslint-disable-next-line react/prop-types

export default PersonalForm;

export const PersonalForm = ({ onMessage }) => {
  // const tasks=[
  //     "soy el gerente",
  //     "soy el administrativo",
  //     "soy ayudante de bodega"
  // ]
  // const [tareas, setTareas] = useState([]);
  // const [tarea, setTarea] = useState("");
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");

  const handleClick = () => {
    const agregarEmpleadoDesdeFormulario = () => {
      onMessage(name);
      onMessage(cargo);
      onMessage(salario);
    };

    // const addElement = () => {
    //   setTareas((prevState) => [...prevState, tarea]);
    // };
    // console.log(tarea);
    // console.log(tareas);
    return (
      <>
        {/* <p>Gestion Empleados</p>
                <input
                  type="text"
                  name="task"
                  onChange={(event) => setTarea(event.target.value)} required
                /> */}
        {/* <button onClick={handleClick}>enviar</button> */}
        {/* {tareas.map((task, idx) => (
                  <li key={idx} onClick={() => handleClick(idx)}>
                    {task}
                  </li>
                ))} */}

        <form id="formularioEmpleado" onSubmit={agregarEmpleadoDesdeFormulario}>
          <label className="form-group"> Nombre: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="ingresa el nombre"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
            required
          ></input>
          <br />

          <label className="form-label"> Cargo:</label>
          <select
            type="text"
            name="cargo"
            id="cargo"
            className="form-control"
            onChange={(event) => setCargo(event.target.value)}
            required
          >
            <option value="" disabled>
              Click Aqui
            </option>
            <option value="gerente">Gerente</option>
            <option value="cargo">Administrativo</option>
            <option value="salario">Ayudante De Bodega</option>
          </select>
          <br />

          <label className="form-group">Salario</label>
          <input
            type="number"
            name="Salario"
            id="salario"
            className="form-control"
            onChange={(event) => setSalario(event.target.value)}
            required
          ></input>
          <br />

          <button type="submit"></button>
          <button type="button" className="btn btn-primary">
            Primary
          </button>
        </form>
      </>
    );
  };

  PersonalForm.propTypes = {
    PersonalForm: PropTypes.function,
  };
};
