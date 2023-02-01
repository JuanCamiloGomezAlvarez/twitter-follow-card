import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export function App() {
    return(
        <>
            <TwitterFollowCard user="midudev" >
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard user="pheralb" >
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard user="goncy" >
                Rodrigo Zapata
            </TwitterFollowCard>
        </>
        
    )
}

  