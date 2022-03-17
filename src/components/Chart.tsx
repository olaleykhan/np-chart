import React from 'react';
import styled from "styled-components";
import useMeasure from 'react-use-measure';
import { scaleLinear, scaleBand } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import {Topics, Colors} from "./../typings"
import { Bar } from '@visx/shape';
import Legend from "./Legend";


const colors = {
	shopping: 'red',
	management: 'blue',
	fishing: 'green',
	community: 'purple',
	potato: 'yellow',
	birthday: 'cyan',
	sport: 'orange',
	security: 'black',
	celebrity: 'white',
	wedding: 'brown',
};


const margin = 30;

// 3. define width
const defaultWidth = 800;

// 4. define height
const defaultHeight = 400;


const xKeys = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']

const Chart = ({data}:any) => {
	const [ref, bounds] = useMeasure();
	const height = bounds.height || defaultHeight;
	const width = bounds.width || defaultWidth;

	const innerWidth = width - margin * 2;
	const innerHeight = height - margin * 2;


	const xScale = scaleBand({
		range: [margin+20, innerWidth],
		round: true,
		domain: xKeys,
		padding: 0.2,
	});

	const yScale = scaleLinear({
		range: [innerHeight, margin],
		domain: [0, 0.8],
	});

	return (
		<BarWrap ref={ref}>
			<div>
				<svg width='100%' height='100%' viewBox={`0 0 ${width} ${height}`}>
				<Group>
					{Object.keys(data).map((d) => {
						const xValue = d;

						const barWidth = xScale.bandwidth();
						const barHeight0 = innerHeight - yScale(data[d][0].value);
						const barHeight1 = innerHeight - yScale(data[d][1].value);
						const barHeight2 = innerHeight - yScale(data[d][2].value);
						const xKey0:Topics = data[d][0].key;
						const xKey1:Topics = data[d][1].key;
						const xKey2:Topics = data[d][2].key;

						const barX = xScale(xValue);
						const barY0 = innerHeight - barHeight0;
						const barY1 = innerHeight - barHeight1;
						const barY2 = innerHeight - barHeight2;

						return (
							<>
								<Bar
									key={`bar-${xKey0}`}
									x={barX}
									y={barY0}
									width={barWidth}
									height={barHeight0}
									fill={colors[xKey0]}
								/>

								<Bar
									key={`bar-${xKey1}`}
									x={barX}
									y={barY1}
									width={barWidth}
									height={barHeight1}
									fill={colors[xKey1]}
								/>
								<Bar
									key={`bar-${xKey2}`}
									x={barX}
									y={barY2}
									width={barWidth}
									height={barHeight2}
									fill={colors[xKey2]}
								/>
							</>
						);
					})}
				</Group>
				<Group>
					<AxisBottom top={innerHeight} scale={xScale} />
				</Group>
				<Group>
					<AxisLeft left={margin+20} scale={yScale} />
				</Group>
				</svg>
				<p> The chart represents the top 3 topics that are likely to be written about for each month across any year. <br/> on the right is the legend that corresponds to the topic each color on the composite bar chart represents </p>
			</div>
			<Legend/>
		</BarWrap>
	);
};

export default Chart;

const BarWrap = styled.div`
height: 550px;
 max-width: 1000px;
 margin-left:80px ;
 
  @media only screen and (min-width: 768px) {
display: flex;
justify-content: space-between;
  } 
`


