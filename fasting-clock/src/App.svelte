<script>
    import { afterUpdate } from "svelte";
    import Circle from "./lib/Circle.svelte";
    import LengthInput from "./lib/LengthInput.svelte";
    import Start from "./lib/Start.svelte";
    import Stop from "./lib/Stop.svelte";
    import { hours, currPerc, futureDate, hasStarted } from './lib/stores';

    let startedApp = false;
    let hoursApp = 0;
    let totalApp = 0;
    let ending = new Date();
    let remainingApp = 0;
    let hrs = 0;
    let mins = 0;
    
    hours.subscribe((n)=> hoursApp = n)
    hasStarted.subscribe((n)=> startedApp = n)

    let endingDisplay = ''

    function handleStart(){
        console.log('start received')
        futureDate.update((n)=> ending = n)
        endingDisplay = ending.toLocaleString()
        currPerc.update((n)=> n = 100)
        calcRemTime()
    }

    function handleStop(){
        console.log('stop received')
        currPerc.update((n)=> n = 50)
    }
  
    function calcRemTime(){
        if( startedApp === true){
        let currentTime = new Date();
        totalApp = hoursApp * 60 * 60 * 1000;
        remainingApp = ending.getTime() - currentTime.getTime()
        hrs = Math.floor(remainingApp / (1000 * 60 * 60))
        mins = Math.floor(remainingApp % (1000 * 60 * 60) / (1000 * 60))
    }
}

    afterUpdate(()=>{
        if(startedApp === true){
        setInterval(()=>{
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
    <div style:margin-top="5rem" style:margin-left="4rem">
        <LengthInput/>
    </div>
    {:else}
    <div style:margin-top="5rem" style:margin-left="3rem">
        <p>There is currently {hrs} hours and {mins} minutes left for the fast.</p>
        <p>The fast will end at {endingDisplay}.</p>
    </div>
        <Stop on:stopped={handleStop}/>
    {/if}
</div>

<!-- <div style:margin-top="5rem" style:margin-left="6rem"> -->
    