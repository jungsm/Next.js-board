import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


export default  async function handler(요청,응답){

    let seesion = await getServerSession(요청,응답, authOptions)

    if (요청.method == 'POST'){
        let data = {title : 요청.body.title, content : 요청.body.content}
        
        console.log(요청.body.email)

        const db = (await connectDB).db("forum")
        let user = await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)},{$set: data})

        if(seesion.user.role == 'admin'){
                await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)},{$set: data})
                    응답.status(200).json("글을 수정했습니다.")
        }
            if(요청.body.email == seesion.user.email){
                    await db.collection('post').updateOne({_id : new ObjectId(요청.body._id)},{$set: data})
                    응답.status(200).json("글을 수정했습니다.")
            }else{
                응답.status(500).json("작성자가 아닙니다.")
            }
            

           

    }
}