
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


export default async function write(){


    let seesion = await getServerSession(authOptions)

    console.log(seesion.role)
    return (
        
        <div className="list-bg">

            {
                seesion
                ? <form action="/api/post/new" method="POST">
                <input className="write-title" name="title" placeholder="제목 입력" ></input>
                <textarea className="write-content" name="content" placeholder="내용을 입력하세요"></textarea>
                <textarea style={{display:'none'}} className="write-content" name="role" defaultValue={seesion.user.role} ></textarea>
                <textarea style={{display:'none'}} className="write-content" name="name" defaultValue={seesion.user.name} ></textarea>
                <div className="btn">
                <button className="write-btn" type="submit">확인</button>
                </div>
            </form>
                :  <h1>로그인없이 글을 작성할수없습니다.</h1> 
            
            }
            </div>
    )
}