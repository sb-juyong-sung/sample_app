import logo from './logo.svg';
import './App.css';
import SendbirdApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';

const App = () => {
  return (
      <div className="App">
          <SendbirdApp
              // Add the two lines below.
              appId={'AF724953-484C-4A31-A559-60D67D914C0A'}   // Specify your Sendbird application ID.
              userId={'jd-prod-chat-test1'}        // Specify your user ID.
          />
      </div>
  );
};

export default App;
