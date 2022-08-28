<script lang="ts">
	import { BarGraph, BarItem } from '@src/components/bar-graph';
	let data: number[] = [1, 4, 5, 7, 9, 10, 12, 15];
	let years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2019];

	let title: string = 'Worldwide Number of Electric Cars';
	let minV: number;
	let maxV: number;
</script>

<div class="root">
	<h1>Graph Component Example</h1>
	<div class="graph-field">
		<BarGraph {data} {title} bind:minV bind:maxV>
			{#each data as d}
				<BarItem min={minV} max={maxV} value={d} />
			{/each}
		</BarGraph>
	</div>
</div>
