<script lang="ts">
	/*graph*/
	export let data: number[];
	export let title: string;
	export let guideCount: number = 8;
	export let minV: number;
	export let maxV: number;

	minV = Math.min(...data);
	maxV = Math.max(...data);
	const range = maxV - minV;
	const diff = range / guideCount;

	const leftGuides: number[] = [];
	for (let i = 0; i < guideCount; i++) {
		leftGuides.push(minV + i * diff);
	}

	leftGuides.sort(function (a, b) {
		return b - a;
	});
</script>

<div class="root">
	<div class="title-field">{title}</div>
	<div class="graph-field">
		<div class="l-guide">
			{#each leftGuides as v}
				<div class="guide-item">{v}</div>
				<svg>
					<line x2="100%" stroke="black" />
				</svg>
			{/each}

			<div class="graphics">
				<slot />
			</div>
		</div>
	</div>
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
				background: rgba(#c5e1a5, 0.7);
				display: flex;
			}
		}
		.under-field {
			height: $under-height;
		}
	}
	line {
		stroke-dasharray: 4;
	}
</style>
