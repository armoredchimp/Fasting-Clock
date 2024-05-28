<script>
    import { afterUpdate } from "svelte";
    import Circle from "./lib/Circle.svelte";
    import LengthInput from "./lib/LengthInput.svelte";
    import Start from "./lib/Start.svelte";
    import Stop from "./lib/Stop.svelte";
    import { hours, currPerc, startDate, futureDate, hasStarted } from './lib/stores';

    let startedApp = false;
    let hoursApp = 0;
    let totalApp = 0;
    let start = new Date();
    let ending = new Date();
    let remainingApp = 0;
    let hrs = 0;
    let mins = 0;
    let succeeded = false;
    
    hours.subscribe((n)=> hoursApp = n)
    hasStarted.subscribe((n)=> startedApp = n)

    let startDisplay = ''
    let endingDisplay = ''

    function handleStart(){
        console.log('start received')
        startDate.update((n)=> start = n)
        futureDate.update((n)=> ending = n)
        startDisplay = start.toLocaleString()
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
        if(remainingApp === 0){
            success()
            return;
        }
        hrs = Math.floor(remainingApp / (1000 * 60 * 60))
        mins = Math.floor(remainingApp % (1000 * 60 * 60) / (1000 * 60))
    }
}

    function success(){
        startedApp = false;
        hasStarted.update((n)=> n = false)
        currPerc.update((n)=> n = 0)
        succeeded = true;
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
    {:else if succeeded === false}
    <div style:margin-top="5rem" style:margin-left="3rem">
        <p>There is currently {hrs} hours and {mins} minutes left for the fast.</p>
        <p>The fast will end at {endingDisplay}.</p>
    </div>
        <Stop on:stopped={handleStop}/>
    {:else if succeeded === true}
    <div style:margin-top="5rem" style:margin-left="3rem">
        <p>The fast has been completed, good job!</p>
        <p>The fast started at {startDisplay}.</p>
    </div>    
    {/if}
</div>

<!-- <div style:margin-top="5rem" style:margin-left="6rem"> -->
    