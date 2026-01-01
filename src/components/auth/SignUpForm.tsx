import { BsGoogle } from "react-icons/bs";
import Button from "../ui/button";
import Input from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
import { signUpSchemaType } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/zod/zodSchema";
import Validation from "../ui/validation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import api from "@/lib/axios/axios";
import { useOzoneStore } from "@/lib/zustand/store";

const SignUpForm = () => {
    const setAuthUser = useOzoneStore((store) => store.setAuthUser);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<signUpSchemaType>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (payload: FieldValues) => {
        try {
            const res = await api.post("/api/auth/sign-up", payload);
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
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-black/20 border  border-gray-900 shadow-md rounded-xl p-5 flex flex-col min-w-[400px]"
            >
                <h1>Sign Up</h1>
                <p>Sign with your credentials to access ai models</p>

                <Input type="text" placeholder="Name" {...register("name")} />
                <Validation error={errors.name && errors.name.message} />

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

                <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                />
                <Validation
                    error={
                        errors.confirmPassword && errors.confirmPassword.message
                    }
                />

                <Button
                    loadingState={isSubmitting}
                    type="submit"
                    radius="full"
                    size="lg"
                    variant="dark"
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
                    Already have an account?
                    <Link to={"/sign-in"}>
                        <span>Sign In</span>
                    </Link>
                </p>
            </form>
        </motion.div>
    );
};

export default SignUpForm;
