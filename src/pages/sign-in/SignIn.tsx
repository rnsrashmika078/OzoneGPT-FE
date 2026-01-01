import SignInForm from "@/components/auth/SignInForm";
import { AnimatePresence } from "framer-motion";
const SignIn = () => {
    return (
        <AnimatePresence>
            <div className="flex bg-gradient-to-br from-black to-black/90 justify-center items-center w-full h-screen">
                <SignInForm />
            </div>
        </AnimatePresence>
    );
};

export default SignIn;
