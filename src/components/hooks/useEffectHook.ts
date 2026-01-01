import api from "@/lib/axios/axios";
import { useOzoneStore } from "@/lib/zustand/store";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useGetAuth = () => {
    const setAuthUser = useOzoneStore((store) => store.setAuthUser);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const res = await api("/api/auth/user", {
                    withCredentials: true,
                });
                if (!res.data.success) {
                    navigate("/sign-in");
                }
                setAuthUser(res.data.user);
            } catch (err) {
                if (err instanceof AxiosError && err.status === 401) {
                    navigate("/sign-in");
                }
                setAuthUser(null);
            }
        };

        getUserDetails();
    }, []);
};
