import React from 'react';
import { Link } from 'react-router-dom'

function DogDetails({ dog }) {
  return (
    <div className="dog-details">
      <div class="dog-name">{dog.name}</div>
      <img className="dog-image" src={dog.photo_url} alt={dog.name} />
      <p class="dog-text" >Características: {dog.characteristics}</p>
     
        <Link to={`/dog/${dog.id}`} className="button-details">
          Saiba mais
        </Link>
      
    </div>
  );
}

export default DogDetails;