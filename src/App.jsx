import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"


const users = [
    {
        userName : "midudev",
        name: "Miguel Angel Duran",
        isFollowing: false
    },
    {
        userName : "freddier",
        name: "Freddy Vega",
        isFollowing: false
    },
    {
        userName : "MoureDev",
        name: "Brais Moure",
        isFollowing: false
    },
    {
        userName : "DiegoRuzzarin",
        name: "Diego Ruzzarin",
        isFollowing: false
    },
]
export function App() {
    return(
        <>
        {
            users.map(user => {
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard key={userName} userName = {userName} initialIsFollowing = {isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })
        }    
        </>
        
    )
}

  