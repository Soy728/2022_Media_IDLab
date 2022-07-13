<script lang="ts">
    export let text: string;
    export let onClick: (value: string) => void;
    export let color: "orange" |"gray" | "dark-gray";
</script>

<div class = "button" data-color = {color} on:click={()=> onClick(text) }>{text}</div>

<style lang="scss">
    .button{
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        &[data-color="orange"]{
            background-color: orange;
        }
        &[data-color="gray"]{
            background-color: gray;
        }
        &[data-color="dark-gray"]{
            background-color:darkgray;
        }
    }
</style>