import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AdminModel } from "../Schema/AdminModel.js";

export async function saveAdmin(request, response) {
    try {
        const newpassword = bcrypt.hashSync(request.body.password, 12)
        request.body['password'] = newpassword;
        const admin = new AdminModel(request.body);
        const saveAdmin = await admin.save();
        response.status(StatusCodes.CREATED).json(saveAdmin);


    } catch (error) {

        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "error in saving data " })

    }

}

export async function login(request, response) {
    try { 
        const admin = await AdminModel.findOne({ gmail: request.body.gmail });
         console.log(admin.password); 
        if (admin) { 
            if(bcrypt.compareSync(request.body.password, admin.password)) {
                const token = jwt.sign({ adminId: admin._id }, 'hello1234');
                response.status(StatusCodes.OK).json({ token: token });

            }
            else {
                response.status(StatusCodes.BAD_REQUEST).json({ message: "invalid password" })
            }

        } else {
            response.status(StatusCodes.BAD_REQUEST).json({ message: "invalid email" })
        }

    } catch (error) {
        console.log(error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "error in login " })

    }
}