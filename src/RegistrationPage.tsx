import React, {ChangeEventHandler, FormEvent, useState} from 'react';

const RegistrationPage = () => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleInputUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value)
    }

    const handleInputPassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        alert('Registration')
    }

    return (
        <div>
            Registration Page
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username
                        <input type="text" value={username} onChange={handleInputUsername}/>
                    </label>
                </div>
                <div>
                    <label>Password
                        <input type="password" value={password} onChange={handleInputPassword}/>
                    </label>
                </div>
                <div>
                    <button>Registration</button>
                </div>


            </form>
        </div>
    );
};

export default RegistrationPage;
