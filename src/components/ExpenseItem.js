import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus, TiAdd, TiUserAdd } from 'react-icons/ti';
import RiAddFill from 'react-icons/ri';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><TiPlus color='green' onClick={event=> increaseAllocation(props.name)}>TiPlus</TiPlus></td>
        <td><TiMinus onClick={event=> decreaseAllocation(props.name)}>TiMinus</TiMinus></td>
        <td><TiDelete size='1.5em' color='red' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
