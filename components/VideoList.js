import React from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

// components
import VideoListItem from './VideoListItem';


const VideoList = ({videos}) => {

    const { containerStyle } = styles;
    const videoItems = videos.map((video,i) => (
        <VideoListItem 
            key={video.etag}
            video={video}
        />
    ));

    return(
        <ScrollView>
            <View style={containerStyle}>
                {videoItems}
            </View>    
        </ScrollView>    
    )
}

const styles = {
    containerStyle: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
}

export default VideoList;