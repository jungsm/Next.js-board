export default function Login(){
    return(
        <div className="list-bg">
            <h1 className="login-title">아직 안정한 컨셉</h1>
            <div className="login-bg">
            <form className="login-form" action="/api/post/sign" method="POST">
                <input className="login-input" name="name" placeholder="이름"></input>
                <input className="login-input" name="email" placeholder="이메일"></input>
                <input className="login-input" name="password" placeholder="비밀번호"></input>
               <input style={{display: 'none'}} name="role" type="text" value="normal" />
                <div className="btn">
                <button className="write-btn">회원가입</button>
                </div>
            </form>
            </div>
        </div>
    )
}