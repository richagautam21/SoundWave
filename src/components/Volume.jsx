import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { AiTwotoneSound } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";


const Container = styled.div`
display: flex;
justify-content: flex-end;
align-content: center;
input {
  width: 15rem;
  border-radius: 2rem;
  height: 0.2rem;
  background-color: #fff;
}
.sound {
  color: white ;
  font-size: 18px;
  margin-right: 10px;
}
.microphone{
  color:white;
  font-size: 18px;
  margin-right: 20px;
  margin-left: 20px;
}
.slider {
  margin-top: -5px;
  margin-right: 10px;
  accent-color: green;
}
`;

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <Container>
      <div className="microphone">
        <TbMicrophone2 />
        </div>
      <div className="sound">
        <AiTwotoneSound  />
        </div>
      <div className="slider">
      <input  type="range" min={0} max={100}  onMouseUp={(e) => setVolume(e)} />
      </div> 
    </Container>
  );
}
