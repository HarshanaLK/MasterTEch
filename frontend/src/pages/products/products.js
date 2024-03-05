import React,{useEffect} from 'react'
import { DeleteProduct, listProducts,CreateProduct} from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';
import './products.css'
import {
    Button
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import { CgAdd } from 'react-icons/cg';
import { Helmet } from 'react-helmet';

const Products = ({history,match}) => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading,error,products} = productList

    const productDelete = useSelector(state => state.productDelete)
    const {loading:loadingDelete,error:errorDelete,success:successDelete} = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdproduct} = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        dispatch({type : PRODUCT_CREATE_RESET})

        if(!userInfo.isAdmin){
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/product/${createdproduct._id}/edit`)
        }else{
            dispatch(listProducts())

        }
    },[dispatch,history,userInfo,successDelete,successCreate,createdproduct])
    const deletehandler = (id) =>{
        if(window.confirm('Are You Sure?')){
            dispatch(DeleteProduct(id))

        }
    }

    const createproducthandler = () =>{
        dispatch(CreateProduct())
    }
    return (

        <div className = 'Users'>
            <Helmet>
                <title>products</title>
            </Helmet>
        <h1 className = 'titlepanel'> Add new Products :</h1>
        <p></p>
            <Button leftIcon = {<CgAdd size = '20' />} className = 'ADDBUTTON' colorScheme ='blue' onClick = {createproducthandler}>ADD</Button>
            
        </div>
    )
}

export default Products
