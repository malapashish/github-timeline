import React , { useState , useEffect } from 'react';
import axios from 'axios';
import github_icon from '.././images/github.svg';

const Login = () => {

    const [ userName , setUserName ] = useState('');
    const [ data , setData ] = useState(null);
    const [ error , setError ] = useState(null); 

    useEffect(() => { 
        if(!(userName === '')){
        axios
            .get(`https://api.github.com/users/${userName}/repos?Authorization=token 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`)
            .then((response) => { 
                setData(response.data.sort((a , b) => {
                    return new Date(a.created_at) - new Date(b.created_at)
                }))
            })
            .catch((e) => {
                setError('Please enter correct username');
                setTimeout(() => {
                    setError(null);
                }, 1000)
            })} 
    },[userName])

    const [ input , setInput ] = useState('');

    

    const handleUsernameChange = (e) => {
        setInput(e.target.value)
    }

    const userNameSubmit = (e) => {
        e.preventDefault();
        setUserName(input);
    }
    
    let togglebit = false;

    return(
        <div> 
           <form className="login">
                <img src={github_icon} alt="" className="form-logo" />
                <label className="login-label">Enter Your Github Username</label>
                <input type="text" value = {input} onChange = {handleUsernameChange} />
                <button className="login-button" onClick = {userNameSubmit}>
                    Let's Gooo
                </button>
                <span style = {{ color : 'red' }}>{error}</span>
            </form>
            {
                data && (
                    data.map(project => 
                        <div className = 'timeline' key = {project.id}>
                            <div className = {`container ${togglebit ? `left` : `right`}`}>
                                <div className = 'content'>
                                    <h2 className = 'project-title'>{project.name}</h2>
                                    {togglebit = !togglebit}
                                    <span className = 'create-date'>
                                       Created At : {project.created_at.substr(0 , 10)}
                                    </span>
                                    <br/>
                                    <span>
                                       Last Updated On : {project.updated_at.substr(0,10)}
                                    </span>
                                    <br/>
                                    <a href = {project.svn_url}>
                                        <button>
                                            <i className="fab fa-github github-icon"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Login;