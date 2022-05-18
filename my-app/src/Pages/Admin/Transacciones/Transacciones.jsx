import React, { useEffect, useState } from "react";
import "../Transacciones/Transacciones.css";

export function Transacciones() {
  const [users, setusers] = useState([]);
  const [usersAux, setUsersAux] = useState([]);

  const [text, setText] = useState();
  async function getUsers() {
    const informacion = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
    const users = await informacion.json();
    setusers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let userFiltered = users;
    if (text) {
      userFiltered = users.filter((item) => {
        return (item.name.toLowerCase().includes(text))
      });
    }
    setUsersAux(userFiltered);
  }, [text, users]);

  return (
    <div>
      <input
        placeholder="Buscar"
        className="filtro"
        onChange={(value) => setText(value.nativeEvent.target.value)}
      ></input>{" "}
      <br />
      <table className="tabla">
        <thead className="thead">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefóno</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {usersAux.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
