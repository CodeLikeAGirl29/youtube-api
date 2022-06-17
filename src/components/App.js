import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import "./App.css";

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, searchVideos] = useVideos("Savannah Dexter");

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className='ui container'>
			<SearchBar onFormSubmit={searchVideos} />
			<div className='ui grid' id='wrap'>
				<div className='row' id='main'>
					<div className='eleven wide column'>
						<VideoDetail video={selectedVideo} />
					</div>
					<div className='five wide column'>
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
			<footer id='footer'>
				<div class='copyright-area'>
					<div class='container'>
						<div class='row'>
							<div class='copyright-text'>
								2022 © created by
								<a href='http://lindseyk.dev'> lindseyk </a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
