import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

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
    orders: [{}]
}
const reducer = (state: State, action: any) => {
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
    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems, userSignin } = shoppingCartContext;
    const navigate = useNavigate()

    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin
    !userSignin ? userSigned = parsedUser : userSigned = userSignin

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' })
            try {
                const { data } = await axios.get(
                    `/api/orders/mine`,
                    { headers: { Authorization: `Bearer ${userSigned?.token}` } }
                )

                console.log(data);

                dispatch({ type: `FETCH_SUCCESS`, payload: data })

            } catch (error) {
                dispatch({
                    type: `FETCH_FAIL`,
                    // payload: alert('error')
                })
            }
        }
        fetchData()
    }, [userSigned?.token])
    if (state) {
        console.log(state?.orders);

    }
    return (
        <div>
            kalb
        </div>
    )
}

export default OrdersHistory