import React from 'react';

const Login = () => {
    const onLogin = (e)=> {
        e.preventDefault();
        console.log('onLogin');
    }
    return (
        <div style={{width:"400px",height:"350px", margin:"50px auto", border: "1px solid #bbbbbb"}}>
            <h1 style={{textAlign:'center'}}>관리자 로그인</h1>
            <form style={{padding:'0 70px'}} onSubmit={onLogin}>
                <p>LOGINID</p>
                <input type="text" placeholder="" style={{width:"250px"}}/>
                <p>LOGINPW</p>
                <input type="password" placeholder="" style={{width:"250px"}} />
                <div style={{marginTop:"30px"}}><input type="submit" value="로그인" style={{width: "253px",height:"40px"}}/></div>
            </form>
        </div>
    );
}

export default Login;