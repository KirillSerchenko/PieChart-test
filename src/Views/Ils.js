import React from 'react';
import {Spinner} from 'react-bootstrap';

const Ils = ({ data }) => {
    return data && data.value ?
        <div>
            {`ILS Value: ${data.value}`}
        </div > : 
  <Spinner animation="border" variant="success" />
}


export default Ils;
