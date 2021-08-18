import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function AppRedux() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash)

    const addCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash })
    }
    const getCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash })
    }
    return (
        <div>
            <h1>Counter: {cash}</h1>
            <button className="btn btn-success" onClick={() => addCash(Number(prompt()))}>Add Cash</button>
            <button className="btn btn-danger" onClick={() => getCash(Number(prompt()))}>Get Cash</button>
        </div>
    )
}
export default AppRedux;
