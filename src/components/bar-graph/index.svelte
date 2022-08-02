<script lang="ts">
	/*graph*/
	export let data:number[];
	export let datas: [];
	export let title: string;
	export let guideCount: number = 8;
	export let minV: number;
	export let maxV: number;
	export let years:number;
	
	
    
	minV = Math.min(...data);
	maxV = Math.max(...data);
	const range = maxV - minV;
	const diff = range / guideCount;

	const leftGuides: number[] = [];
	for (let i = 0; i < guideCount; i++) {
		leftGuides.push(minV + i * diff);
	}

	leftGuides.sort(function(a, b)  {
  		return b - a;});
	
</script>

<div class="root">
	<div class="title-field">{title}</div>
	<div class="graph-field">
		<div class="l-guide">
			{#each leftGuides as v}
				<div class="guide-item">{v}</div>
				<svg>
					<line x2="100%" stroke="black" ></line>
				</svg>
				{/each}
			<!-- <svg>
				{#each leftGuides as v}
				
				<line x2="100%"></line>
				<text y="{v}">{v}</text>
				
				{/each}
			</svg> -->
		</div>

		<div class="graphics">
			<slot />
		</div>
	</div>

	<!-- <svg viewBox ="0 0 100% 100%">
		<g class='item'>
			{#each years as y,i}
			<text x="{i*guideCount*10}" y= "40" class="year">{y}</text>
			{/each}
		</g>
	</svg> -->
</div>

<style lang="scss">
	.root {
		$title-height: 48px;
		$under-height: 32px;
		height: 100%;
		width: 100%;
		.title-field {
			height: $title-height;
		}
		.graph-field {
			height: calc(100% - $title-height - $under-height);
			display: flex;
			position: relative;
			.l-guide {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				.guide-item {
					flex: 1 0;
				}
				
			}
			
			.graphics {
				right: 0;
				top: 0;
				height: 100%;
				width: calc(100% - 100px);
				position: absolute;
				background: rgba(#C5E1A5, 0.7);
				// border-left: solid 2px #000;
				display: flex;
			}
		}
		.under-field {
			height: $under-height;
		}
	}
	line{
		stroke-dasharray:4;
	}
</style>
