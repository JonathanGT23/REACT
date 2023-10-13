import {useState} from 'react'
import "./index.css"
import "./App.css"
function TwitterFollowCard({children,userName = "unknown" ,initialIsFollowing}) {
    
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? "Siguendo" : "Seguir"

    const butttonClassName = isFollowing 
    ? "tw-followCard-button is-following" 
    : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


  return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt={name} />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={butttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard