import axios from "axios";
import { ORDER_CREATE_FAIL,ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS, ORDER_DELIVER_FAIL, ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../ConsFunction/orderConstants";

export const CreateOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/orders`, order, DBsetting)
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}
export const getOrderDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/orders/${id}`,DBsetting)
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}
export const payOrder = (orderId,paymentResult) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/orders/${orderId}/pay`,paymentResult,DBsetting)
        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}

export const deliverOrder = (order) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DELIVER_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/orders/${order._id}/deliver`,{},DBsetting)
        dispatch({
            type: ORDER_DELIVER_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_DELIVER_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}

export const listMyOrders = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_MY_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/orders/myorders`,DBsetting)
        dispatch({
            type: ORDER_LIST_MY_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_LIST_MY_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}

export const listOrders = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const DBsetting = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/orders/`,DBsetting)
        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data
        })


       
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}