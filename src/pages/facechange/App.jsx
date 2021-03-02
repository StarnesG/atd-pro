import React, { useState } from 'react'
import AllSlider from './components/Slider/SliderMenu.jsx'
import FaceMenu from './components/FaceChange/FaceMenu.jsx'
import ModeMenu from './components/SelectMode/ModeMenu.jsx'
import 'antd/dist/antd.css';

export default function App() {
	const [ASSty, setASSty] = useState (true);
	const [FMSty, setFMSty] = useState(true);
	
	const goFace=()=>{
		if(ASSty)
		setASSty(false);
		else{
			setASSty(true);
		}
	}
	const goVideo=()=>{
		if(FMSty)
		setFMSty(false);
		else{
			setFMSty(true);
		}
	}

	return (
		<div>
			{ASSty ? (
				<AllSlider />
			) : null}
			{FMSty ? (
				<FaceMenu />
			) : null}
			<ModeMenu goFace={goFace} goVideo={goVideo} />
			{/* <div style={{background:'#bbffaa' ,width:'100vw',height:'200px'}}> </div> */}
		</div>
	)

}
