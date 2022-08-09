<script lang="ts">
	import { BarGraph, BarItem } from '@src/components/bar-graph';
	import{ onMount,onDestroy} from 'svelte';
	import{ updateData, priceData, type PriceUnit} from '@src/store';

/*	interface Chart {year: number; data: number}

	let datas:Chart[] = 
	[{year:2011,data:1},
	{year:2012,data:4}, 
	{year:2013,data:5}, 
	{year:2014,data:7}, 
	{year:2015,data:9}, 
	{year:2016,data:10}, 
	{year:2017,data:12}, 
	{year:2018,data:15}	]

	let data:number[] = [1,4,5,7,9,10,12,15];
	let years:number[] = [2011,2012,2013,2014,2015,2016,2017,2019];
	*/

	let title: string = 'Worldwide Number of Electric Cars';
	let minV: number;
	let maxV: number;
    let value:number = 7;

	onMount(()=>{
		updateData(value);
	});

</script>

<div class="root">
	<select name= "select" bind:value on:change="{() => updateData(value)}">
		<option value=7>7</option>
		<option value=30>30</option>
		<option value=90>90</option>
		<option value=180>180</option>
		<option value=360>360</option>
	</select>
	
	<h3>Length: {$priceData.length}</h3> 

	<div>
	   <div class = "table"  style="overflow:scroll; width:800px; height:500px; padding:10px;"> 
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
					<td class = "name">{price.denom}</td>
					<td class ="timestamp">{price.timestamp}</td>
					<td class ="price">{price.price}</td>
					<td class ="marketCap">{price.marketCap}</td>
					<td class ="dayVolume">{price.dayVolume}</td>
				</tr>
		
		   {/each}
			</table>
		</div>
    </div>
</div>

<!--
	<div class="graph-field">
		<BarGraph {data} {title} {years} bind:minV bind:maxV>
			{#each datas as d}
				<BarItem min={minV} max={maxV} value={d.data}/>
			{/each}
		</BarGraph>
	</div> -->


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

th,td {
  padding: 6px 15px;
}
th {
  background: #42444e;
  color: #fff;
  text-align: left;
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

</style>
