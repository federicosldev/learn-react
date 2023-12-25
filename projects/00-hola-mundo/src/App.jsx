import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'juangonza',
        name: 'Juan Gonzalez Perez',
        isFollowing: true
    },
    {
        userName: 'Federico_mktg',
        name: 'Federico Sanchez',
        isFollowing: false
    },
    {
        userName: 'realmurciacfsad',
        name: 'Real Murcia',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='app'>
            {
                users.map(({ userName, name, isFollowing}) => (
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