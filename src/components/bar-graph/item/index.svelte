<script lang="ts">
	/*item*/
	export let min: number;
	export let max: number;
	export let value: number;

	let height: number = ((value - min) / (max - min)) * 100;

	$: {
		height = ((value - min) / (max - min)) * 100;
	}
</script>

<div class="root">
	<svg viewBox="0 0 100% 100%">
		<g class="item">
			<rect fill="#33691E" width="100%" height="{height}%" />
		</g>
	</svg>
</div>

<style lang="scss">
	.root {
		flex: 1 0;
		position: relative;

		svg {
			transform: rotate(180deg);
			position: absolute;
			bottom: 0px;
			height: 100%;
			width: 50%;
		}
		text {
			transform: rotate(180deg);
		}
	}
</style>
