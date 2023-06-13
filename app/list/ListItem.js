'use client'

import Link from "next/link"
export default async function ListItem({result}){
        return(
            <div>
            {
                result.slice(0, 8).map((a,i)=>
                <div key={i}> 
                <Link href={"/detail/" + result[i]._id}>
                <ul className="list-item">
                  <li><h2 >{[i]}</h2></li>
                    <li> <h2 className="list-title">{result[i].title}</h2></li>
               <li> <h2>{result[i].name}</h2></li>
              
            </ul>
            </Link>
            </div>
              )}
              </div>
        )
}