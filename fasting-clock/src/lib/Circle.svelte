<script>
    
    
    import { currPerc, hasStarted } from './stores';
    import Clock from './Clock.svelte';
    import TargetClock from './TargetClock.svelte';

    let currPerc_value = 50;
    let startedGate = false;

    currPerc.subscribe((value)=>{
        currPerc_value = value;
    })

    hasStarted.subscribe((value)=>{
        startedGate = value;
    })
</script>

<style>
   .circle {
    position: relative;
    top: 0;
    height: 30rem;
    width: 30rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: darkcyan;
   }

   .overlay {
    position: absolute;
    bottom: 0.01px;
    height: 50%;
    width: 100%;
    background-color: purple;
   }

   .clock {
    position: absolute;
    top: 10rem;
    left: 8rem;
    z-index: 0;

}
   .target-clock {
    position: absolute;
    top: 16rem;
    left: 8rem;
    z-index: 0;
   }
 
</style>

<div class="circle">
    <div class="overlay" style="height: {currPerc_value}%; transition: 0.1s ease-in"></div>
    <div class="clock" >
        <Clock />
    </div>
    {#if startedGate === false}
    <div class="target-clock" >
        <TargetClock />
    </div>
    {:else}
    <div class="target-clock">
        <h1>{currPerc_value} % remaining</h1>
    </div>
    {/if}
</div>