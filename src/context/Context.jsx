/* eslint-disable react/prop-types */
import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent = async (prompt) => {
        run(prompt)
    }

    const contextvalue = {

    }

    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
