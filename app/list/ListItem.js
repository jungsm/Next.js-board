import Link from "next/link"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
export default async function ListItem({result}){
  let seesion = await getServerSession(authOptions)
        return(
            <div>
            {
                result.slice(0, 8).map((a,i)=>
                <Link href={"/detail/" + result[i]._id}>
                <div className="list-item">
                  <div>
                <h2>{seesion.user.name}</h2>
                </div>
                <div>
              <h2 className="list-title">{result[i].title}</h2>
              </div>
              <h2 >{result[i].time}</h2>
            </div>
            </Link>
            
              )}
              </div>
        )
}