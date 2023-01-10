import React, { createContext, useReducer } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Reducer from "./Reducer";

const queryClient = new QueryClient();

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const authContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    const authInfo = {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
    };
    return (
        <QueryClientProvider client={queryClient}>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;
