<script lang="ts">
	export let data:[] = []
	export let barWidth = 10
	export let spacing = 5
	
	// compute dimensions
	$: dimensions = {
		width: (data.length * barWidth) + ((data.length - 1) * spacing),
		height: Math.max(...data)
	}
</script>

<!-- generate SVG -->
<svg viewBox="0 0 {dimensions.width} {dimensions.height}">
	{#each data as y, x}
	  <!-- bar -->
		<rect x={x*(barWidth+spacing)} y={dimensions.height-y} width={barWidth} height={y}/>
	{/each}
</svg>

<style>
	svg {
		background: #ffffff;
		padding:10px;
		border-radius: 0.75rem;

	}
	rect {
		fill: rgb(66, 183, 66);
        width: 7px;
	}
</style>