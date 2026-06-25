import { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Polyline, Text as SvgText } from 'react-native-svg';

import { colors } from '../constants/colors';

type Props = {
  points: number[];
  xLabels: string[];
  yMax: number;
  height?: number;
};

// Simple line chart: horizontal grid, a purple polyline with markers, and
// y/x axis labels. Width is measured from the container so it stays responsive.
const EarningsChart = ({ points, xLabels, yMax, height = 170 }: Props) => {
  const [width, setWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width);

  const padLeft = 34;
  const padRight = 8;
  const padTop = 10;
  const padBottom = 22;
  const chartW = Math.max(0, width - padLeft - padRight);
  const chartH = height - padTop - padBottom;

  const x = (i: number) => padLeft + (points.length > 1 ? (i / (points.length - 1)) * chartW : 0);
  const y = (v: number) => padTop + (1 - v / yMax) * chartH;

  const gridVals = [0, 5, 10, 15, 20].filter((v) => v <= yMax);
  const polyline = points.map((v, i) => `${x(i)},${y(v)}`).join(' ');

  return (
    <View style={styles.wrap} onLayout={onLayout}>
      {width > 0 && (
        <Svg width={width} height={height}>
          {/* horizontal grid + y labels */}
          {gridVals.map((v) => (
            <Line
              key={`g${v}`}
              x1={padLeft}
              y1={y(v)}
              x2={width - padRight}
              y2={y(v)}
              stroke={colors.divider}
              strokeWidth={1}
            />
          ))}
          {gridVals.map((v) => (
            <SvgText key={`yl${v}`} x={4} y={y(v) + 4} fontSize={10} fill={colors.textTertiary}>
              {v === 0 ? '0' : `${v}K`}
            </SvgText>
          ))}

          {/* line */}
          <Polyline
            points={polyline}
            fill="none"
            stroke={colors.primary}
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* markers */}
          {points.map((v, i) => (
            <Circle
              key={`m${i}`}
              cx={x(i)}
              cy={y(v)}
              r={3.5}
              fill={colors.white}
              stroke={colors.primary}
              strokeWidth={2}
            />
          ))}

          {/* x labels */}
          {xLabels.map((lbl, i) => (
            <SvgText
              key={`xl${i}`}
              x={padLeft + (i / (xLabels.length - 1)) * chartW}
              y={height - 6}
              fontSize={10}
              fill={colors.textTertiary}
              textAnchor="middle"
            >
              {lbl}
            </SvgText>
          ))}
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignSelf: 'stretch',
  },
});

export default EarningsChart;
