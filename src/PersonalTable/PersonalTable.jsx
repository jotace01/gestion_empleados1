// PersonalTable.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PersonalContext } from "../context/PersonalProvider";

export const PersonalTable = ({ items, onEdit, onDelete }) => {
  const personal = useContext(PersonalContext);

  const Personal = useContext(PersonalContext);

  console.log("personal", Personal);

  return (
    <>
      <h5>Detalle De Empleados</h5>
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Edad</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.apellido}</td>
              <td>{item.cargo}</td>
              <td>{item.edad}</td>
              <td>{item.salario}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-1"
                  onClick={() => onEdit(idx)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(idx)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

PersonalTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      cargo: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      salario: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PersonalTable;
