<script>
    import Circle from "./lib/Circle.svelte";
    import LengthInput from "./lib/LengthInput.svelte";
    import Start from "./lib/Start.svelte";
    import { currPerc } from './lib/stores';

    function handleStart(){
        console.log('start received')
        currPerc.update((n)=> n = 100)
    }
  
</script>

<style>
    
</style>

<div style:margin="0 auto" style:max-width="40rem" style:position="relative">
    <h1 style:margin-left="8.5rem" style:margin-bottom="3rem">Fasting Clock</h1>
    <Circle 
    
        
    />
    <div style:position="absolute" style:right="-15rem" style:top="18rem">
        <Start on:started={handleStart}/>    
        </div>
    <div style:margin-top="5rem" style:margin-left="3rem">
        <LengthInput/>
    </div>
   
</div>

<!-- <div style:margin-top="5rem" style:margin-left="6rem"> -->
    