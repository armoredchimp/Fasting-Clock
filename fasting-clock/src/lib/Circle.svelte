<script>
    
    
    import { hours, futureDate, currPerc, hasStarted } from './stores';
    import Clock from './Clock.svelte';
    import TargetClock from './TargetClock.svelte';
	import { afterUpdate } from 'svelte';
	

    let currPerc_value = 50;
    let totalDuration = 0;
    let remainingTime = 0;
    let end = new Date()

  

    currPerc.subscribe((value)=>{
        currPerc_value = value;
    })



    function calcRemPerc(){
        if($hasStarted === true){
        let currentTime = new Date();
        totalDuration = $hours * 60 * 60 * 1000;
        futureDate.update((n)=>end = n);
        remainingTime = end.getTime() - currentTime.getTime()
        if(remainingTime > 0){
        currPerc.update((n)=>n = (remainingTime / totalDuration) * 100)
    }
}   
}

    

    afterUpdate(()=>{
        if($hasStarted === true){
        setInterval(()=>{
            calcRemPerc()
        }, 1000);
        }
    }
    )
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
    top: 4rem;
    left: 7.5rem;
    z-index: 0;

}
   .target-clock {
    position: absolute;
    top: 15.5rem;
    left: 7.5rem;
    z-index: 0;
   }

   .perc {
    position: absolute;
    top: 13rem;
    left: 7.5rem;
   }
 
</style>

<div class="circle">
    <div class="overlay" style="height: {currPerc_value}%; transition: 0.1s ease-in"></div>
    {#if $hasStarted === false}
    <div class="clock" >
        <Clock />
    </div>
    <div class="target-clock" >
        <TargetClock />
    </div>
    {:else}
    <div class="perc">
        <h1>{currPerc_value.toFixed(2)} % remaining</h1>
    </div>
    {/if}

</div>