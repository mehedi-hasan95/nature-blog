import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [error, setError] = useState("");
    const { user, dispatch, isFetching } = useContext(authContext);
    const registerUser = async (e) => {
        e.preventDefault();
        setError("");
        const form = e.target;
        const username = form.text.value;
        const password = form.password.value;

        const data = { username, password };
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.status === 200) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res });
            } else {
                setError("Wrong username or password");
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    console.log(user);
    return (
        <div className="login-bg">
            <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-400">
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={registerUser}
                    className="space-y-12 ng-untouched ng-pristine ng-valid"
                >
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="text"
                                className="block mb-2 text-sm"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="username"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {error && (
                            <span className="text-2xl text-red-700">
                                {error}
                            </span>
                        )}
                        <div>
                            <input
                                type="submit"
                                value="Login"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:text-gray-900 cursor-pointer"
                            />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400 text-white">
                            Don't have an account yet?
                            <Link
                                rel="noopener noreferrer"
                                to="/register"
                                className="hover:underline dark:text-violet-400"
                            >
                                Sign up
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
