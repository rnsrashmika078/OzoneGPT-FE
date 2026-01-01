import { AuthUser } from "@/types/type";
import { create } from "zustand";
type OzoneStore = {
    authUser: AuthUser | null;
    setAuthUser: (user: AuthUser | null) => void;
};
export const useOzoneStore = create<OzoneStore>((set) => ({
    authUser: null,
    setAuthUser: (authUser) => set({ authUser }),
}));
