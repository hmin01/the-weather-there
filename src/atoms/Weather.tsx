import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
// Icon
import { WiCloud, WiCloudy, WiDayCloudy } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiRain, WiShowers, WiThunderstorm } from 'react-icons/wi';
import { WiSnow } from 'react-icons/wi';
import { WiDust } from 'react-icons/wi';

const WeatherIcon = styled.span`
  align-items: center;
  display: flex;
  font-size: 96px;
`;

const Weather: React.FC<any> = ({ weather }): JSX.Element => {
  const icon: JSX.Element = useMemo(() => {
    if (weather.description === 'overcast clouds' || weather.description === 'broken clouds') return (<WiCloudy />);
    else if (weather.description === 'scattered clouds') return (<WiCloud />);
    else if (weather.description === 'few clouds') return (<WiDayCloudy />);
    else if (weather.description === 'shower raion') return (<WiShowers />);
    else if (weather.description === 'rain') return (<WiRain />);
    else if (weather.description === 'snow') return (<WiSnow />);
    else if (weather.description === 'thunderstorm') return (<WiThunderstorm />);
    else if (weather.description === 'mist') return (<WiDust />);
    else return (<WiDaySunny />);
  }, [weather.description]);

  return (
    <WeatherIcon>{icon}</WeatherIcon>
  );
}

export default Weather;