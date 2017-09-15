import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

// libraries
import {
    Card
} from 'react-native-elements';

// components
import WatchButton from './WatchButton';


const VideoListItem = ({video}) => {

    const { 
        cardStyle,
        imageStyle,
        contentStyle,
        titleStyle,
        channelTitleStyle,
        descriptionStyle, 
    } = styles;
    const { 
        title, 
        channelTitle, 
        description, 
        thumbnails:{medium:{url}} 
    } = video.snippet;

    return(
        <View>
            <Card title={null} containerStyle={cardStyle}>
                <Image 
                    source={{uri: url}}
                    style={imageStyle}
                />
                <View style={contentStyle}>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                    <Text style={channelTitleStyle}>
                        {channelTitle}
                    </Text>
                    <Text style={descriptionStyle}>
                        {description}
                    </Text>

                    <WatchButton videoId={video.id.videoId} />

                </View>
            </Card>
        </View>
    )
}

const styles = {
    cardStyle: {
        padding: 5,
    },
    imageStyle: {
        alignItems:'stretch', 
        height: 180,
    },
    contentStyle: {
        flex: 1,
        padding: 5,
    },
    titleStyle: {
        fontSize: 12,
        marginBottom: 5,
    },
    channelTitleStyle: {
        fontSize: 11,
        color: '#777',
        marginBottom: 5,
        alignSelf: 'flex-end',
    },
    descriptionStyle: {
        fontSize: 11,
        alignSelf: 'center'
    },

}


export default VideoListItem;