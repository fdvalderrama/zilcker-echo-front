
import type { User } from "../models/User"
import { baseUrl } from "./BaseUrl";

export const saveUserApi = async (user: User): Promise<boolean> => {
    const response = await baseUrl.post("/api/User", user);
    return response.data.success;
}