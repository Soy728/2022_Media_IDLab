<script lang="ts">
	import _ from 'lodash';
	import { onMount, onDestroy } from 'svelte';
	import { updateData, priceData, type PriceUnit } from '@src/store';
	import { updateDenom, denomData } from '@src/store';

	import * as d3 from 'd3';

	let minV: number;
	let maxV: number;
	let value: 7 | 30 | 90 | 180 | 360 = 7;
	// const a = value as unknown as string;
	let prices: [number, number][] = [];
	let path: string | null = '';
	let eleContainerWidth: number;
	let eleContainerHeight: number;
	let diff: number;

	onMount(() => {
		updateData(value);
		updateDenom(value);
	});

	const line = d3
		.line<[number, number]>()
		.x((d) => (d[0] * eleContainerWidth) / prices.length)
		.y((d) => ((d[1] - minV) * eleContainerHeight) / diff)
		.curve(d3.curveBasis);

	$: {
		prices = _($priceData)
			.map((d, i) => [i, d.price] as [number, number])
			.take(10)
			.value();
		path = line(prices);
		minV = _(prices)
			.map((p) => p[1])
			.min() as number;
		maxV = _(prices)
			.map((p) => p[1])
			.max() as number;
		diff = maxV - minV;
		console.log(eleContainerWidth, eleContainerHeight);
	}
</script>

<div class="root">
	<select name="select" bind:value on:change={() => updateData(value)}>
		<option value="7">7</option>
		<option value="30">30</option>
		<option value="90">90</option>
		<option value="180">180</option>
		<option value="360">360</option>
	</select>
	<!-- 
	<select name="select" bind:value>
		{#each $denomData as denom}
			<option>{denom}</option>
		{/each}
	</select> -->

	<h3>Length: {$priceData.length}</h3>

	<div>
		<div class="table" style="overflow:scroll; width:800px; height:500px; padding:10px;">
			<table>
				<tr>
					<th>denom</th>
					<th>timestamp</th>
					<th>price</th>
					<th>marketCap</th>
					<th>dayVolume</th>
				</tr>
				{#each $priceData as price}
					<tr>
						<td class="name">{price.denom}</td>
						<td class="timestamp">{price.timestamp}</td>
						<td class="price">{price.price}</td>
						<td class="marketCap">{price.marketCap}</td>
						<td class="dayVolume">{price.dayVolume}</td>
					</tr>
				{/each}
			</table>
		</div>
	</div>

	<div
		class="svg-container"
		style="width:100%; height: 500px"
		bind:clientWidth={eleContainerWidth}
		bind:clientHeight={eleContainerHeight}
	>
		<svg style="width: 100%; height:100%">
			<path d={path} />
		</svg>
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
	/*select*/
	select {
		box-sizing: border-box;
		width: 100px;
		padding: 4px;
		font-size: 14px;
		border-radius: 6px;
	}

	option {
		padding: 4px;
		font-size: 14px;
		color: #fff;
		background: #272822;
	}

	/*table*/
	body {
		color: #666;
	}
	table {
		border-spacing: 0;
		width: 100%;
	}

	th,
	td {
		padding: 6px 15px;
	}
	th {
		background-color: #42444e;
		color: #fff;
		text-align: left;
		position: sticky;
		top: 0px;
	}

	td {
		border-right: 1px solid #c6c9cc;
		border-bottom: 1px solid #c6c9cc;
	}
	td:first-child {
		border-left: 1px solid #c6c9cc;
	}
	tr:nth-child(even) td {
		background: #eaeaed;
	}

	svg {
		path {
			fill: none;
			stroke: #272822;
			stroke-width: 2;
		}
	}
</style>
