import React, { MutableRefObject } from 'react';
import { Config } from 'roughjs/bin/core';
declare type SvgRef = MutableRefObject<SVGSVGElement>;
declare type CanvasRef = MutableRefObject<HTMLCanvasElement>;
interface RoughContextProps {
    ref?: SvgRef | CanvasRef;
    config?: Config;
    width?: number;
    type: 'canvas' | 'svg';
    height?: number;
}
declare const RoughContext: React.Context<RoughContextProps>;
export default RoughContext;
