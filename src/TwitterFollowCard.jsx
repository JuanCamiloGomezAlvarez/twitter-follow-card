import {useState} from "react"

export function TwitterFollowCard({children, userName, }){

  const [isFollowing, setIsFolowing] = useState(false)

  const text = isFollowing ? "Following" : "Follow" 
  const buttonClassName = isFollowing ? "tw-followCard-button is-following": "tw-followCard-button"

  const handleClick = () =>{
    setIsFolowing(!isFollowing)
  }

  return(
    
    <article className="tw-followCard">
        <header className="tw-followCard-header">
        <img 
          className="tw-followCard-header-img" 
          src={`https://unavatar.io/${userName}`}
          alt="un avatar random" />
        <div> 
            <strong>{children}</strong>
            <span>@{userName}</span>
        </div>
        </header>
        <aside className={"tw-followCard-aside"}>
            <button className={buttonClassName} onClick={handleClick}>
              <span className="tw-followCard-textOne">{text}</span>
              <span className="tw-followCard-textTwo">Unfollow</span>
            </button>
        </aside>                                    
    </article>
  )
}