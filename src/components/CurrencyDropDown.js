import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {
    const [action, setAction] = useState('');
    return (
        <div>
        <div className="input-currency" style={{ marginLeft: '1rem', Size: 20}}>
                <label className="input-currency" htmlFor="inputGroupSelect02">Currency</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                <option defaultValue value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
                  </select>
                  
                
        </div>
    );
};
export default CurrencyDropDown;
