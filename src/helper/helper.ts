import axios from "@/lib/axios/axios";
import { AxiosError } from "axios";

export const logout = async () => {
    try {
        const res = axios("/api/auth/sign-out", {
            withCredentials: true,
        });
        return res;
    } catch (err) {
        return err instanceof AxiosError ? err.response?.data.message : "";
    }
};

