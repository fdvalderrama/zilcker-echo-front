
import type { User } from "../models/User"
import { baseUrl } from "./BaseUrl";

export const saveUserApi = async (user: User): Promise<boolean> => {
    try{
        const response = await baseUrl.post("/Users", user);
        return response.status === 200 || response.status === 201;
    }catch(error: any){
        if(error.response && error.response.status === 400){
            console.error("Error saving user:", error.response.data);
        }else{
            console.error("Unexpected error:", error);
        }
        return false;
    }

    
}