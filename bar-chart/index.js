'use strict';

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, width]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.country))
    .range([0, height]);

  svg.selectAll('rect').data(data)
    .enter().append('rect')
      .attr('y', d => yScale(d.country))
      .attr('width', d => xScale(d.population))
      .attr('height', yScale.bandwidth());
};

d3.csv('data.csv').then(data => {
  data.forEach(d => {
    d.population = +d.population * 1000;
  })
  render(data);
});
