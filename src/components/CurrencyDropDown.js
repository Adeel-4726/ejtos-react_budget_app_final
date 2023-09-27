import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {
    const { dispatch  } = useContext(AppContext);
    //const [action, setAction] = useState('');
    function setAction(value) {
        dispatch({
                type: 'CHG_CURRENCY',
                payload: value,
            });
      }
    
    return (
        <div>
        <div className="input-currency" style={{ marginLeft: '1rem', Size: 20}}>
                <label className="input-currency" htmlFor="inputGroupSelect02">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)} style={{ backgroundColor: "lightgreen" }}>
                <option defaultValue value="$" name="Dollar">&nbsp;&nbsp;&nbsp;$ Dollar</option>
                <option value="£" name="Pound">&nbsp;&nbsp;&nbsp;£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">&nbsp;&nbsp;&nbsp;₹ Ruppee</option>
                  </select>
                  
                
        </div>
    );
};
export default CurrencyDropDown;
