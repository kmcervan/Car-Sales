import React from 'react';

const AddedFeature = props => {

  // const removerHandler =(id)=>{
  //   props.removeFeature(id);
  // }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature({type:'REMOVE_FEATURE', payload: props.feature.price})} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
