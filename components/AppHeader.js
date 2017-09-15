import React from 'react';

// libraries
import { 
    Header,
} from 'react-native-elements';


const AppHeader = ({headerText}) => {

    return(
        <Header 
        centerComponent={{ text: headerText, style: {color: '#fff'} }}
        outerContainerStyles={{ backgroundColor: '#E62117' }}
        />
    )
}

export default AppHeader;