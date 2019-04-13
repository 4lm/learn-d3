'use strict';

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');
const eyeSpacing = 100;
const eyeYOffset = -70;
const eyeRadius = 40;
const eyeBrowWidth = 70;
const eyeBrowHeight = 15;
const eyeBrowYOffSet = -70;

const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle =  g.append('circle')
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const eyesG = g.append('g')
    .attr('transform', `translate(0, ${eyeYOffset})`);

const leftEye =  eyesG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing);

const rightEye =  eyesG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing);

const leftEyeBrow = eyesG.append('rect')
    .attr('x', -eyeSpacing -eyeBrowWidth / 2)
    .attr('y', eyeBrowYOffSet)
    .attr('width', eyeBrowWidth)
    .attr('height', eyeBrowHeight);

const rightEyeBrow = eyesG.append('rect')
    .attr('x', eyeSpacing -eyeBrowWidth / 2)
    .attr('y', eyeBrowYOffSet)
    .attr('width', eyeBrowWidth)
    .attr('height', eyeBrowHeight);

const mouth = g.append('path')
    .attr('d', d3.arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }));
