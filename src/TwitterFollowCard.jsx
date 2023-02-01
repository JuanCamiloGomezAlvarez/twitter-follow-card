import {useState} from "react"

export function TwitterFollowCard({children, user, }){

  const [isFollowing, setIsFolowing] = useState(false)

  const text = isFollowing ? "Siguiendo" : "Seguir" 
  const buttonClassName = isFollowing ? "tw-followCard-button is-following": "tw-followCard-button"

  const handleClick = () =>{
    setIsFolowing(!isFollowing)
  }

  return(
    
    <article className="tw-followCard">
        <header className="tw-followCard-header">
        <img 
          className="tw-followCard-header-img" 
          src={`https://unavatar.io/${user}`}
          alt="un avatar random" />
        <div> 
            <strong>{children}</strong>
            <span>@{user}</span>
        </div>
        </header>
        <aside className={"tw-followCard-aside"}>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>                                    
    </article>
  )
}