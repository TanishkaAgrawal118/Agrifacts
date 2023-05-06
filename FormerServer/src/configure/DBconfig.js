import mongoose from 'mongoose';
export async function  configureDb(){
        try {
              await mongoose.connect('mongodb://127.0.0.1:27017/former_store')
               console.log("DB Connected..");
            
        } catch (error) {
             console.log(error);
            
        }
}