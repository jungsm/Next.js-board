import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';


export default async function handler(요청,응답){

    if (요청.method == 'POST'){
        let seesion = await getServerSession(요청,응답, authOptions)
       
         const db = (await connectDB).db("forum")
        let user = await db.collection('post').findOne({ _id : new ObjectId(요청.body)})
        
        if(seesion.user.role == 'admin'){
                await db.collection('post').deleteOne({ _id : new ObjectId(요청.body)})
                응답.status(200).json("글이 삭제되었습니다.")
        }
        console.log(seesion)
    if(user.email == seesion.user.email){
      await db.collection('post').deleteOne({ _id : new ObjectId(요청.body)})
         응답.status(200).json("글이 삭제되었습니다.")
        
     }else{
        응답.status(500).json("작성자가 아닙니다..")
     }
    
   
    }
}