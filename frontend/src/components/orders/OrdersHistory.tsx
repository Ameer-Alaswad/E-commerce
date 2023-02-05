import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
type State = {
    loading: boolean;
    error: string;
    orders: {};
}
type Action = {
    type: string;
    payload: string
}
const initialState = {
    loading: false,
    error: '',
    orders: {}
}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, orders: action.payload, loading: false }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
const OrdersHistory = () => {
    const navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>OrderHistory</div>
    )
}

export default OrdersHistory