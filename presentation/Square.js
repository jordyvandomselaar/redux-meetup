import React from "react";

export const Square = ({children}) => {
    return (
        <div style={
            {
                display: "flex",
            }
        }>
            {children}
        </div>
    );
};

export const SquareItem = ({children}) => {
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between"
            }
        }>
            {children}
        </div>
    )
};
