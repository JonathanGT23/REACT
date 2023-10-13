
import "./index.css"
import "./App.css"
import TwitterFollowCard from "./TwitterFollowCard"

function App() {

    const users = [
        {
            userName: "JonathanGT23",
            name: "Jonathan González Tenorio",
            isFollowing: true
        },
        {
            userName: "midudev",
            name: "Jonathan González Tenorio",
            isFollowing: false
        },
        {
            userName: "trump",
            name: "Carlos Santana",
            isFollowing: false
        },
    ]

  return (
    <section className="App">

        {
            users.map(({userName,name,isFollowing}) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing} 
                    >
                        {name}
                    </TwitterFollowCard>
                ))
         }

        
    </section>
    
  )
}

export default App