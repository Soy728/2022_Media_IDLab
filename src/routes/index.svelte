<script lang="ts">
	const week: string[] = ['calculator', 'bargraph', 'linegraph'];
</script>

<div class="title">2022 미디어융합연구</div>
<ul>
	{#each week as w}
		<li>
			<a target="_blank" href="https://my-app-6f5df.firebaseapp.com/{w}">
				{w}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	* {
		font-family: 'Noto Sans KR', sans-serif;
	}
	.title {
		font-size: 1.5em;
		text-align: center;
		margin: 30px;
		font-weight: bolder;
	}
	ul {
		list-style: none;
	}
	a {
		display: flex;
		margin-left: auto;
		margin-right: auto;
	}

	a:link,
	a:visited {
		background-color: #ffe6e6;
		color: maroon;
		padding: 15px 25px;
		text-align: center;
		text-decoration: none;
		width: 210px;
	}
	a:hover,
	a:active {
		background-color: #f2d1d1;
	}
</style>
