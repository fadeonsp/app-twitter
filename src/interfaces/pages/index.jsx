import { useIndex } from '../../data/hooks/pages/useIndex.page'
import styles from '../styles/pages/index.module.css'
import TextInput from '../components/inputs/textInput/TextInput'
import Tweet from '../components/data-display/Tweet/Tweet'

export default function Index() {

    const {
        user,
        text,
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList, 
    } = useIndex()

    return(
        <div>
            <h1 className={styles['page-title']}>Tweet Clone</h1>
            <div className={styles['tweet-container']}>
                <img 
                    src={user.picture} 
                    alt={user.name} 
                    className={styles['avatar']}
                />
                <TextInput 
                    placeholder={'O que houve ?'}
                    rows={3}
                    maxLength={maxTextLength}
                    value={text}
                    onChange={onTextChange}
                />
            </div>
            <div className={styles['button-container']}>

                <div> {text.length} / {maxTextLength}</div>
                <button 
                    onClick={sendTweet}
                    disabled={text.length === 0} 
                    className={styles['button-post']}
                >
                    Tweetar
                </button>

            </div>
           
           <ul className={styles['list']}>
                {sortedTweetList.map((tweet) => (
                    <li key={tweet.id} className={styles['list-item']}>
                        <Tweet tweet={tweet.data} />
                    </li>
                ))}
                
            </ul>
        </div>

    ); 
}
