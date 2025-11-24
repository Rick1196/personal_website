"use client";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ShutdownIcon from "../../assets/shutdown";
import RotateIcon from "../../assets/rotate";
type DeviceContainerProps = {
    portview: string;
    height: number;
    width: number;
};
const devices: { [key: string]: { width: number; height: number } } = {
    iPhoneXR: { width: 414, height: 896 },
    iPhoneXS: { width: 375, height: 812 },
    iPhoneXSMax: { width: 414, height: 896 },
    iPhoneX: { width: 375, height: 812 },
    iPhone8Plus: { width: 414, height: 736 },
    iPhone8: { width: 375, height: 667 },
    iPhone7Plus: { width: 414, height: 736 },
    iPhone7: { width: 375, height: 667 },
    iPhone6: { width: 414, height: 736 },
    iPhone6S: { width: 375, height: 667 },
    iPhone5: { width: 320, height: 568 },
    Nexus6P: { width: 412, height: 732 },
    Nexus5X: { width: 412, height: 732 },
    GooglePixel4XL: { width: 412, height: 869 },
    GooglePixel4: { width: 412, height: 869 },
    GooglePixel3aXL: { width: 412, height: 824 },
    GooglePixel3a: { width: 412, height: 846 },
    GooglePixel3XL: { width: 412, height: 847 },
    GooglePixel3: { width: 412, height: 824 },
    GooglePixel2XL: { width: 412, height: 732 },
    GooglePixelXL: { width: 412, height: 732 },
    GooglePixel: { width: 412, height: 732 },
    SamsungGalaxyNote10: { width: 412, height: 869 },
    SamsungGalaxyNote9: { width: 360, height: 740 },
    SamsungGalaxyNote5: { width: 480, height: 853 },
    LGG5: { width: 480, height: 853 },
    OnePlus3: { width: 480, height: 853 },
    SamsungGalaxyS9: { width: 360, height: 740 },
    SamsungGalaxyS8: { width: 360, height: 740 },
    SamsungGalaxyS7Edge: { width: 360, height: 640 },
    SamsungGalaxyS7: { width: 360, height: 640 },
};
const rotatations = [
    {
        screenContainerProps: {
            flexDirection: "column",
        },
        topContainerProps: {
            flexDirection: "row",
            flex: 0,
        },
        audioOutputProps: {
            width: 80,
            height: 5,
        },
        screenProps: {
            bottom: 0,
            top: 25,
        },
    },
    {
        screenProps: {
            bottom: 0,
            top: 15,
        },
        screenContainerProps: {
            flexDirection: "row-reverse",
        },
        topContainerProps: {
            flexDirection: "column",
            flex: 1,
        },
        audioOutputProps: {
            width: 5,
            height: 80,
        },
    },
    {
        screenProps: {
            bottom: 0,
            top: 15,
        },
        screenContainerProps: {
            flexDirection: "column-reverse",
        },
        topContainerProps: {
            flexDirection: "row",
            flex: 1,
        },
        audioOutputProps: {
            width: 80,
            height: 5,
        },
    },
    {
        screenProps: {
            bottom: 0,
            top: 15,
        },
        screenContainerProps: {
            flexDirection: "row",
        },
        topContainerProps: {
            flexDirection: "column-reverse",
            flex: 0,
        },
        audioOutputProps: {
            width: 5,
            height: 80,
        },
    },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  select {
    padding: 8px;
    border-radius: 8px;
    width: 100%;
  }
`;

const Select = styled.select`
  align-self: center;
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  align-items: top;
  justify-content: center;
  align-items: center;
`;

const DeviceContainer = styled.div<DeviceContainerProps>`
  border: solid 2px #646464;
  border-radius: 50px;
  width: ${(props) =>
        props.portview === "portrait" ? props.width : props.height}px;
  height: ${(props) =>
        props.portview !== "portrait" ? props.width : props.height}px;
`;

const DeviceBorder = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 41%,
    rgba(75, 131, 143, 1) 84%
  );
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding-top: 5px;
  padding-bottom: 2.5px;
  padding-left: 5px;
  padding-right: 2.5px;
`;

const ScreenBorder = styled.div<{ flexDirection: string }>`
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 1) 93%,
    rgba(75, 131, 143, 1) 98%
  );
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;
const Screen = styled.div<{ top: number; bottom: number }>`
  position: relative;
  width: 96%;
  height: 94%;
  background: white;
  border-radius: inherit;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: 6px;
  &.fadeIn {
    animation: ${fadeIn} ease 5s;
  }
`;

const TopContainer = styled.div<{ flexDirection: string; flex: number }>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: 20%;
  align-self: center;
  border-radius: inherit;
  align-items: center;
  justify-content: center;
  gap: 70px;
  flex: ${(props) => props.flex};
`;

const LightNotifications = styled.div`
  width: 5px;
  height: 5px;
  border: solid 1px white;
  border-radius: 50%;
  box-shadow: 0px 0px 85px 20px rgb(255, 255, 255);
`;

const AudioOutput = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  border: solid 1px white;
  height: ${(props) => props.height}px;
  border-radius: 30px;
`;

const Iframe = styled.iframe`
  border-radius: inherit;
  width: 100%;
  height: 100%;
`;

const DeviceControlsContainer = styled.div`
  height: 300px;
  width: 80px;
  background: grey;
  margin-top: 5rem;
  border-radius: 0 5px 5px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  button {
    background: transparent;
    span {
    background-color: transparent;
    svg{
    background-color: transparent;
    }}
    }
`;

const Sleep = styled.div`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileView: React.FC = () => {
    const [screenState, setScreenState] = useState({
        currentPortview: "portrait",
        currentRotation: 0,
    });
    const [isOn, setIsOn] = useState(true);
    const [currentDevice, setCurrentDevice] = useState(Object.keys(devices)[0]);

    const rotate = () => {
        setScreenState((prev) => ({
            currentPortview:
                prev.currentPortview === "portrait" ? "landscape" : "portrait",
            currentRotation:
                prev.currentRotation === 3 ? 0 : prev.currentRotation + 1,
        }));
    };

    return (
        <MainContainer className="main-container flex flex-row flex-align-center-elements flex-justify-center-elments">
            <Select
                value={currentDevice}
                onChange={({ target: { value } }) => setCurrentDevice(value)}
                className="ghost"
            >
                {Object.keys(devices).map((device, index) => (
                    <option value={device} key={`${device}-${index}`}>
                        {device}
                    </option>
                ))}
            </Select>
            <Container>
                <DeviceContainer
                    portview={screenState.currentPortview}
                    height={devices[currentDevice].height}
                    width={devices[currentDevice].width}
                >
                    <DeviceBorder>
                        <ScreenBorder
                            {...rotatations[screenState.currentRotation].screenContainerProps}
                        >
                            <TopContainer
                                {...rotatations[screenState.currentRotation].topContainerProps}
                            >
                                <LightNotifications />
                                <AudioOutput
                                    {...rotatations[screenState.currentRotation].audioOutputProps}
                                />
                            </TopContainer>
                            <Screen {...rotatations[screenState.currentRotation].screenProps}>
                                {isOn ? (
                                    <Iframe
                                        src={window.location.origin}
                                        id="content"
                                        className="fadeIn"
                                        title="content"
                                    />
                                ) : (
                                    <Sleep className="fadeIn">
                                        <button onClick={() => setIsOn((prev) => !prev)} aria-label="Shut down emulator">
                                            <span>
                                                <ShutdownIcon />
                                            </span>
                                        </button>
                                    </Sleep>
                                )}
                            </Screen>
                        </ScreenBorder>
                    </DeviceBorder>
                </DeviceContainer>
                <DeviceControlsContainer>
                    <button onClick={rotate} aria-label="Rotate screen emulator">
                        <span>
                            <RotateIcon />
                        </span>
                    </button>
                    <button onClick={() => setIsOn((prev) => !prev)} aria-label="Shut down emulator">
                        <span>
                            <ShutdownIcon />
                        </span>
                    </button>
                </DeviceControlsContainer>
            </Container>
        </MainContainer>
    );
};

export default MobileView;
