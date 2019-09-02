import React from 'react';

import Container from '../shared/Container';
import Chart from '../shared/Chart';

export default props => (
    <Container {...props}>
        <Chart {...props} />
    </Container>
);
