import { RouterGuard } from 'react-router-guard'

import config from './configs/routes'

import './style';

export default () => (
    <div id="app">
        <RouterGuard config={config}/>
    </div>
);
