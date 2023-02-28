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
    useIndex()
    return <div>
        <TextInput />
        <Tweet tweet={tweet} />
    </div>
}
