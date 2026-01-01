import { Link, useNavigate } from "react-router-dom";
import Input from "../ui/input";
import { BsGoogle } from "react-icons/bs";
import Button from "../ui/button";
import { motion } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/zod/zodSchema";
import { signInSchemaType } from "@/types/type";
import Validation from "../ui/validation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import api from "@/lib/axios/axios";
import { useOzoneStore } from "@/lib/zustand/store";
const SignInForm = () => {
  

    const setAuthUser = useOzoneStore((store) => store.setAuthUser);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<signInSchemaType>({ resolver: zodResolver(signInSchema) });
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const onSubmit = async (payload: FieldValues) => {
        try {
            const res = await api.post("/api/auth/sign-in", payload);
            toast.success(res.data.message, {
                position: "bottom-right",
                autoClose: 3000,
                theme: "dark",
            });
            if (res.data.success) {
                setAuthUser(res.data.user);
                navigate("/");
            }

            reset();
        } catch (err) {
            toast.error(
                err instanceof AxiosError ? err.response?.data.message : "f",
                {
                    position: "bottom-right",
                    autoClose: 3000,
                    theme: "dark",
                }
            );
        }
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* <BiUserX color="red" size={25} onClick={() => navigate("/")} /> */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black/20 border  border-gray-900 shadow-md rounded-xl p-5 flex flex-col min-w-[400px]"
            >
                <h1>Sign In</h1>
                <p>Sign in to access free ai models</p>

                <Input
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                />
                <Validation error={errors.email && errors.email.message} />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                <Validation
                    error={errors.password && errors.password.message}
                />
                <Button
                    loadingState={isSubmitting}
                    type="submit"
                    radius="full"
                    size="lg"
                    variant="dark"
                    disabled={isSubmitting}
                >
                    Continue
                </Button>
                <div className="border-b-2 border-gray-900 p-0.1 mb-5 mt-5 relative">
                    <span className="absolute">OR</span>
                </div>
                <Button radius="full" size="lg" variant="dark">
                    Continue with Google
                    <BsGoogle />
                </Button>
                <div className="border-b-2 border-gray-900 p-0.1 mb-5 mt-5 relative">
                    <span className="absolute">OR</span>
                </div>
                <p className="flex justify-center items-center gap-2">
                    Don't have account?
                    <Link to={"/sign-up"}>
                        <span>Sign up</span>
                    </Link>
                </p>
                {/* <p>{errors[0]?.message}</p> */}
            </form>
        </motion.div>
    );
};

export default SignInForm;
