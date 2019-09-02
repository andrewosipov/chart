import React from 'react';
import Container from './Container';

export default ({ currentTheme, children }) => (
    <Container currentTheme={currentTheme}>{children}</Container>
);
