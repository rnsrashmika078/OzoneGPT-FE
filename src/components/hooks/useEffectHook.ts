import api from "@/lib/axios/axios";
import { useOzoneStore } from "@/lib/zustand/store";
import { useEffect } from "react";

export const useGetAuth = () => {
    const setAuthUser = useOzoneStore((store) => store.setAuthUser);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const res = await api("/api/auth/user", {
                    withCredentials: true,
                });
                setAuthUser(res.data.user);
                console.log("auth user", res.data.user);
            } catch (err) {
                setAuthUser(null);
            }
        };

        getUserDetails();
    }, []);
};
