import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import product from './data/products.js'
import User from './DataModules/userModel.js'
import Product from './DataModules/productModel.js'
import Order from './DataModules/orderModel.js'
import connectDB from './DBsetting/db.js'


dotenv.DBsetting()
connectDB()

const importData = async () => {
    try {
        // empty all DataModules 
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
       // Add data to DataModules
        // select all users 
       const createUsers = await User.insertMany(users)
       // select admin user
       const adminUser = createUsers[0]._id
        //add admin user for each products
        const sampleProducts = product.map(product => {
            return{...product, user: adminUser}
        })
        //add all products data to the model
        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        // empty all DataModules 
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
    
        console.log(`Data Destroyed !`.red.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

//node backend/seeder -d
if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}