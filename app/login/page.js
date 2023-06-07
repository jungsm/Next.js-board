export default function Login(){
    return(
        <div className="list-bg">
            <h1 className="login-title">아직 안정한 컨셉</h1>
            <div className="login-bg">
            <form className="login-form" action="/api/post/member" method="POST">
                <input className="login-input" name="id" placeholder="아이디"></input>
                <input className="login-input" name="paw" placeholder="비밀번호"></input>
                <div className="btn">
                <button className="write-btn">회원가입</button>
                </div>
            </form>
            </div>
        </div>
    )
}