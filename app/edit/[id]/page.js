import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function edit(props){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id : new
        ObjectId(props.params.id)})
        console.log(result)
    return (

        <div className="list-bg">
            <form action="/api/post/edit" method="POST">
                <input className="write-title" name="title" defaultValue={result.title}/>
                <textarea className="write-content" name="content"  defaultValue={result.content}/>
                <input style={{display : 'none'}} className="write-content" name="_id" defaultValue={result._id} />
                <input style={{display : 'none'}} className="write-content" name="role" defaultValue={result.role} />
                <input style={{display : 'none'}} className="write-content" name="email" defaultValue={result.email} />
                <div className="btn">
                <button className="write-btn" type="submit">수정</button>
                </div>
            </form>
            </div>
    )
}