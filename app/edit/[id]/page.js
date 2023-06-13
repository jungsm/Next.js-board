import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
export default async function edit(props){

    let seesion = await getServerSession(authOptions)

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new
        ObjectId(props.params.id)})
        console.log(seesion)
    return (

        <div className="list-bg">
            {
                seesion
                ?   <form action="/api/post/edit" method="POST">
                <input className="write-title" name="title" defaultValue={result.title}/>
                <textarea className="write-content" name="content"  defaultValue={result.content}/>
                <input style={{display : 'none'}} className="write-content" name="_id" defaultValue={result._id} />
                <input style={{display : 'none'}} className="write-content" name="role" defaultValue={result.role} />
                <input style={{display : 'none'}} className="write-content" name="email" defaultValue={result.email} />
                <div className="btn">
                <button className="write-btn" type="submit">수정</button>
                </div>
            </form>
                : <h1>로그인없이 글을 수정할수 없습니다.</h1>
            }

            </div>
    )
}