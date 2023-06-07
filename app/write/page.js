export default function write(){
    return (
        <div className="list-bg">
            <form action="/api/post/new" method="POST">
                <input className="write-title" name="title" placeholder="제목 입력" ></input>
                <textarea className="write-content" name="content"  placeholder="내용을 입력하세요"></textarea>
                <div className="btn">
                <button className="write-btn" type="submit">확인</button>
                </div>
            </form>
            </div>
    )
}