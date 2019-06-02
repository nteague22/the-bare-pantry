import { ReactNode } from 'react';
import { Stats } from 'webpack';

export default interface EntrypointProps {
    children: ReactNode;

    stats: Stats;
} 