<script lang="ts">
	import { BarGraph, BarItem } from '@src/components/bar-graph';
	let datas: [] = 
	[{year:2011,data:1},
	{year:2012,data:4}, 
	{year:2013,data:5}, 
	{year:2014,data:7}, 
	{year:2015,data:9}, 
	{year:2016,data:10}, 
	{year:2017,data:12}, 
	{year:2018,data:15}]
	let data:number[] = [1,4,5,7,9,10,12,15];
	let years:number[] = [2011,2012,2013,2014,2015,2016,2017,2019];

	let title: string = 'Worldwide Number of Electric Cars';
	let minV: number;
	let maxV: number;


</script>

<div class="root">
	<h1>Graph Component Example</h1>
	<div class="graph-field">
		<BarGraph {data} {title} {years} bind:minV bind:maxV>
			{#each datas as d}
				<BarItem min={minV} max={maxV} value={d.data} year={d.year}/>
			{/each}
		</BarGraph>
	</div>
</div>

<style lang="scss">
	.root {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 32px;
		.graph-field {
			height: 600px;
		}
	}

	:global(body, html) {
		padding: 0;
		margin: 0;
	}
</style>
