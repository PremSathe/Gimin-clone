/* eslint-disable react/prop-types */
import { createContext } from "react";
// eslint-disable-next-line no-unused-vars
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {



    const contextvalue = {

    }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
