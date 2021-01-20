import React from 'react';

const AdditionalFeature = props => {

  // const addHandler = (id) => {
  //   props.addFeature(id);
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature({type:'ADD_FEATURE'})} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
