import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };
    }

    componentDidMount() {
        this.onTermSubmit("Elon Must Gangsa's paradise");
    }

    onTermSubmit = async (term) => {
        const responcse = await youtube.get("/search", {
            params: {
                q: term,
            },
        });

        try {
            const items = responcse.data.items;
            this.setState({ videos: items, selectedVideo: items[0] });
        } catch (error) {
            console.log(error);
        }
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
        console.log("From the App video!", video);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
