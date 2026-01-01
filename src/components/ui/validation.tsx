const Validation = ({ error }: { error: string | undefined }) => {
    if (!error) return;
    return <div className=" text-red-500 px-2 mb-3 text-xs font-light">{error}</div>;
};

export default Validation;
