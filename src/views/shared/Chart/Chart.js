import React from 'react';
import Echarts from 'echarts-for-react';
import getOptions from './options';
import { theme } from '../../../config';

export default ({ data }) => (
    <Echarts
        option={getOptions(data, theme)}
        style={{ height: '450px', width: '100%' }}
        className="react_for_echarts"
    />
);
