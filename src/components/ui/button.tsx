import { BiLoader } from "react-icons/bi";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string;
    loadingState?: boolean;
    variant?: "default" | "dark" | "light";
    size?: "xs" | "sm" | "md" | "lg";
    radius?: "xs" | "md" | "xl" | "full";
    children?: React.ReactNode;
    textAlign?: "left" | "right" | "center";
    border?: boolean;
}

const Button = ({
    name,
    variant = "default",
    size = "md",
    radius = "xs",
    className,
    textAlign = "center",
    border = true,
    children,
    loadingState,
    ...props
}: ButtonProps) => {
    const variants = {
        default: "bg-black/20 text-white border border-[rgba(1,1,1,1)]",
        light: "text-xs bg-white  hover:bg-[#dedede] text-black",
        dark: "text-white text-xs bg-[#141414]   hover:bg-[#252525]",
    };

    const sizes = {
        xs: "px-3 py-1.5 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-3 py-2  text-base",
        lg: "px-3 py-4 text-lg",
    };
    const radiuses = {
        xs: "rounded-xs",
        md: "rounded-md",
        xl: "rounded-xl",
        full: "rounded-full",
    };

    const textAlignment = {
        left: "justify-start pl-5",
        center: "justify-center",
        right: "justify-end pr-5",
    };

    const style = `flex py-1 relative items-center ${textAlignment[textAlign]} transition-all gap-2 ${radiuses[radius]} ${variants[variant]} ${sizes[size]} ${className}`;
    return (
        <button className={`${style}`} {...props}>
            {loadingState ? (
                <BiLoader size={20} className="animate-spin" />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
