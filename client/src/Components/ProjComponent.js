import React from 'react';

const ProjComponent = ({ items, projTitle, openModal }) => {
  return (
    <ul className="Ing">
      <h1> {projTitle} {items.length}</h1>
      {items.map((item) => (
        <li key={item.project_id}>
          <div
            className="Ing_list"
            onClick={() => openModal(item.project_id)}
          >
            * {item.project_name}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjComponent;
