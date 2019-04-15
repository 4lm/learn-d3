'use strict';

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

d3.csv('data.csv').then(data => {
    data.forEach(d => {
        d.population = +d.population * 1000;
    })
    console.log(data);
});
