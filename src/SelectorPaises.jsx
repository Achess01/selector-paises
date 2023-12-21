import React, { useEffect, useState } from "react";

const ListaPaises = [
  { id: 1, nombre: "Guatemala", entrada: [2, 3, 4] },
  { id: 2, nombre: "Mexico", entrada: [1, 4, 6] },
  { id: 3, nombre: "El Salvador", entrada: [2, 4] },
  { id: 4, nombre: "Nicaragua", entrada: [2, 4] },
  { id: 5, nombre: "Costa Rica", entrada: [2, 4] },
  { id: 6, nombre: "País F", entrada: [2, 4] },
  // Agrega más países según sea necesario
];

const SelectorPaises = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [paisesAcceso, setPaisesAccesso] = useState([])

  useEffect(() => {
    const actualizarListaAcceso = () => {
      console.log(selectedCountry.target.value);
    };

    actualizarListaAcceso()
  }, [selectedCountry]);



  const mostrarPaisesAcceso = (paisesAcceso) => {
    console.log("Países de acceso:", paisesAcceso.map((id) => getPaisNombre(id)));
  };



  const getPaisNombre = (id) => {
    const pais = ListaPaises.find((p) => p.id === id);
    return pais ? pais.nombre : "";
  };


  return (
    <div>
      <select id="selectPaises" onChange={setSelectedCountry}>
        <option value="0">----</option>
        {ListaPaises.map(({ id, nombre }) => (<option value={id} key={id}>{nombre}</option>))}
      </select>
    </div>
  );
};

export default SelectorPaises;
