<script>
    import { onMount } from "svelte";
    import Circle from "./lib/Circle.svelte";
    import LengthInput from "./lib/LengthInput.svelte";
    import Start from "./lib/Start.svelte";
    import { hours, currPerc, futureDate, hasStarted } from './lib/stores';

    let startedApp = false;
    let hoursApp = 0;
    let totalApp = 0;
    let ending = new Date();
    let remainingApp = 0;
    let hrs = 0;
    let mins = 0;
    futureDate.subscribe((n)=> ending = n)
    hours.subscribe((n)=> hoursApp = n)
    hasStarted.subscribe((n)=> startedApp = n)

    let endingDisplay = ending.toLocaleString();

    function handleStart(){
        console.log('start received')
        currPerc.update((n)=> n = 100)
    }
  
    function calcRemTime(){
        let currentTime = new Date();
        totalApp = hoursApp * 60 * 60 * 1000;
        remainingApp = ending.getTime() - currentTime.getTime()
        hrs = Math.floor(remainingApp / (1000 * 60 * 60))
        mins = Math.floor(remainingApp % (1000 * 60 * 60) / (1000 * 60))
    }

    onMount(()=>{
        if(startedApp === true){
        const interval = setInterval(()=>{
            calcRemTime()
        }, 1000);
        }
    }
    )

</script>

<style>
    
</style>

<div style:margin="0 auto" style:max-width="40rem" style:position="relative">
    <h1 style:margin-left="8.5rem" style:margin-bottom="3rem">Fasting Clock</h1>
    <Circle 
    
        
    />
    {#if startedApp === false}    
    <div style:position="absolute" style:right="-15rem" style:top="18rem">
        <Start on:started={handleStart}/>    
        </div>
    <div style:margin-top="5rem" style:margin-left="3rem">
        <LengthInput/>
    </div>
    {:else}
    <div style:margin-top="5rem" style:margin-left="2rem">
        <p>There is currently {hrs} hours and {mins} minutes left for the fast.</p>
        <p>The fast will end at {endingDisplay}.</p>
    </div>
    {/if}
</div>

<!-- <div style:margin-top="5rem" style:margin-left="6rem"> -->
    