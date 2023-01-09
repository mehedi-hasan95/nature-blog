import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState("");
    const [usedEmail, setUsedEmail] = useState(false);
    const navigage = useNavigate();
    console.log(usedEmail);
    const registerUser = async (e) => {
        e.preventDefault();
        setError("");
        setUsedEmail(false);
        const form = e.target;
        const username = form.text.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6 && confirm.length < 6) {
            setError("Your password should be 6 digits");
            return;
        }
        if (password !== confirm) {
            setError("Your Password didn't match");
            return;
        }

        try {
            // Send user to DB
            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    username,
                    email,
                    password,
                }
            );
            res.data && navigage("/login");
        } catch (err) {
            setUsedEmail(true);
        }
    };
    return (
        <div className="login-bg">
            <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register</h1>
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
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email@email.com"
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
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="confirm" className="text-sm">
                                    Confirm Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="confirm"
                                id="confirm"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <fieldset className="w-full space-y-1 dark:text-gray-100">
                            <img src="" alt="" />
                            <label
                                htmlFor="files"
                                className="block text-sm font-medium"
                            >
                                Attachments
                            </label>
                            <div className="flex">
                                <input
                                    type="file"
                                    name="files"
                                    id="files"
                                    className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                                />
                            </div>
                        </fieldset>
                    </div>
                    {error && (
                        <span className="text-red-700 font-bold">{error}</span>
                    )}
                    {usedEmail && (
                        <span className="text-red-700 font-bold">
                            The username or password is already exist
                        </span>
                    )}
                    <div className="space-y-2">
                        <div>
                            <input
                                type="submit"
                                value="Register"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:text-gray-900 cursor-pointer"
                            />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400 text-white">
                            Already have an account yet?
                            <Link
                                rel="noopener noreferrer"
                                to="/login"
                                className="hover:underline dark:text-violet-400"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
