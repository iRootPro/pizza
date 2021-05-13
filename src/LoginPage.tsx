import React, {FormEvent, useState} from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleInputUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    const handleInputPassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        alert('Login')
    }

    return (
        <div>
            Login Page
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username
                        <input type="text" value={username} onChange={handleInputUsername}/>
                    </label>
                </div>
                <div>
                    <label>Password
                        <input type="password" value={password} onChange={handleInputPassword}/>
                    </label>
                </div>
                <div>
                    <button>LogIn</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
