import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { CometChat } from '@cometchat-pro/chat';
import config from './config';

let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion("us").build();


CometChat.init(config.appID, cometChatSettings)

ReactDOM.render(<App />, document.getElementById('root'));
