import React from "react";

interface Props {
    children: React.ReactNode;
    onClick: () => void; // onClick prop type
}

const Button = ({ children, onClick }: Props) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
