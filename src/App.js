import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height= "100vh"
            projectID= "7dd04ff9-217d-4c44-b0fa-e588fd66548c"
            userName= "Saurabh"
            userSecret= "123123"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;