import React from "react";

const TestFile = () => {
    const submitform = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const file = e.target.file.value;
        console.log(name, password, file);
    };
    return (
        <div>
            <form onSubmit={submitform}>
                <input
                    type="text"
                    name="name"
                    id=""
                    className="border"
                    placeholder="Your Name"
                />
                <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Your Password"
                    className="border"
                />
                <input type="file" name="file" id="" />
                <input type="submit" value="Submit" className="bg-purple-400" />
            </form>
        </div>
    );
};

export default TestFile;
