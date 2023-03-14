import React, { FC, RefObject } from 'react';
import { Config } from 'roughjs/bin/core';
declare type renderer = 'canvas' | 'svg';
interface RoughProps {
    width?: number;
    height?: number;
    config?: Config;
    renderer?: renderer;
}
interface RoughCompProps extends RoughProps {
    forwardedRef?: RefObject<unknown>;
}
export declare const ReactRoughComp: FC<RoughCompProps>;
export declare const ReactRough: React.FC<RoughCompProps>;
export * from './RoughComponents';
export default ReactRough;
