import React from 'react'
import { withRouter } from 'react-router-dom'
function Home(props) {
    let NavtoLogin = () => {
        props.history.push('/Login')
    }
    let NavtoSignup = () => {
        props.history.push('/Signup')
    }
    return (
        <div className='App'>
            <h1>Home</h1>
            <p><button type='submit' className="btn btn-dark" onClick={NavtoLogin}>Login</button>|<button type='submit' className="btn btn-dark" onClick={NavtoSignup}>Signup</button></p>
        </div>
    )
}

export default withRouter(Home)
