<script lang="ts">
	import { Button } from '@src/components/button';
	//script area
	const textNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.'];
	const texttop: string[] =["   C   "];
	const text:string="C";
	const textOperations: string[] = ['+','-','x','÷',"="];
	let total:string = "";
 
	function calculator(num:string):void{
	   if(num == "C"){
		  total = "";
	   }
	   else if(num == "="){
		  total = eval(total);
	   }
	   else if(num == "x"){
		  total +="*"
	   }
	   else if(num == "÷"){
		  total += "/"
	   }
	   else{
		  total += num;
	   }
 
	}
	
 </script>

 <div class = calculator>
 	<div class="container">
		<div class = "display">{total}</div>
	</div>
	<div class = "mainpad">
 		<div class="frame">
			
			<Button {text} onClick={(value) => calculator(value)} color="gray" />
			
			<!-- <Button {texttop} onClick={(value) => returnnum(value)} color="gray" /> -->

			{#each textNumbers as text}
	  			<Button {text} onClick={(value) => calculator(value)} color="dark-gray" />
			{/each}
		</div>
 	</div>
     <div class="sidebar">   
 		<div class="operframe">
			{#each textOperations as text}
	   			<Button {text} onClick={(value) => calculator(value)} color="orange" />
			{/each}
 		</div>
	</div>   
</div>

<style land="scss">
	.container{
		width: 328px;
		height: 100px;
		background-color: rgb(53, 53, 53);
		position: relative;
	}

	.display{
		color: white;
		font-size: 28px;
		position: absolute;
		top: 25px;
		right: 12px;

	}

	.frame {
	   width: 246px;
	   display: flex;
	   flex-wrap: wrap;
	}
	.mainpad {
		float: left;
		margin: 0;
	   	}
 </style>