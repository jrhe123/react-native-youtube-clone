import React from 'react';

// libraries
import {
    Button,
} from 'react-native-elements';

import {
    WebBrowser,
} from 'expo';


const WatchButton = ({videoId}) => {

    return(
        <Button 
            raised
            title="Watch on youtube"
            icon={{name: 'play-arrow'}}
            containerViewStyle={{marginTop: 10}}
            backgroundColor='#E62117'
            onPress={() => {
                WebBrowser.openBrowserAsync(
                    `https://m.youtube.com/watch?v=${videoId}`
                );
            }}
        />
    )
}

export default WatchButton;