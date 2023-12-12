import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { getTimestamp, getTime, getDate } from './utils/date.utils';

interface IWeatherForecastCurrentTimeProps {
    timezone: string;
}

export default function WeatherForecastCurrentTime({
    timezone,
}: IWeatherForecastCurrentTimeProps): JSX.Element {
    const [timestamp, setTimestamp] = useState(() => getTimestamp(timezone));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimestamp(getTimestamp(timezone));
        }, 5000);

        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <VStack style={styles.container}>
            <Text fontSize={STYLE_VARIABLES.smFontSize}>
                {getDate(timestamp)}
            </Text>
            <Text fontSize={STYLE_VARIABLES.lgFontSize} fontWeight="bold">
                {getTime(timestamp)}
            </Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
});
