import { connectDB } from "@/util/database";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';



export default async function handler(요청,응답){
    let seesion = await getServerSession(요청,응답,authOptions)

    if (요청.method == 'POST'){
        if(seesion){
            요청.body.email = seesion.user.email
        }
        console.log(seesion);
        if(요청.body.title == ''){
            응답.status(500).json("이름을 입력해주세요")
        }
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(요청.body)
            응답.redirect(302,'/list')
        } catch (error) {
            응답.status(200).json("에러가 발생했습니다.")
            
        } 
    }
}