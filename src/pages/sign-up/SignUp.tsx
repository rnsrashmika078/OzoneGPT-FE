import SignUpForm from "@/components/auth/SignUpForm";
import { AnimatePresence } from "framer-motion";

const SignUp = () => {
    return (
        <AnimatePresence>
            <div className="flex bg-gradient-to-br from-black to-black/90 justify-center items-center w-full h-screen">
                <SignUpForm />
            </div>
        </AnimatePresence>
    );
};

export default SignUp;
