import { useIndex } from '../../data/hooks/pages/useIndex.page'
import styles from '../styles/pages/index.module.css'
import TextInput from '../components/inputs/textInput/TextInput'
import Tweet from '../components/data-display/Tweet/Tweet'

 const tweet = {
    date: 'há 3 dias',
    text: 'Meu primeiro tweet',
    user: {
        name: 'Eduardo césar',
        username: 'fadeonsp',
        picture: 'https://github.com/fadeonsp.png',

    },
 }

export default function Index() {
    const { user } = useIndex()
    return(
        <div>
            <h1 className={styles['page-title']}>Tweet Clone</h1>
            <div className={styles['tweet-container']}>
                <img 
                    src={user.picture} 
                    alt={user.name} 
                    className={styles['avatar']}
                />
                <TextInput />
            </div>
            <div className={styles['button-container']}>
                <div> 0 /150</div>
                <button className={styles['button-post']}>Tweetar</button>
            </div>
           
           <ul className={styles['list']}>
                <li className={styles['list-item']}>
                     <Tweet tweet={tweet} />
                </li>
                <li className={styles['list-item']}>
                     <Tweet tweet={tweet} />
                </li>
                <li className={styles['list-item']}>
                     <Tweet tweet={tweet} />
                </li>
           </ul>

           
        </div>

    ); 
}
