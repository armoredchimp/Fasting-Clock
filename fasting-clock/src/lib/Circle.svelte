<script>
    
    
    import { currPerc } from './stores';
    import Clock from './Clock.svelte';
    import TargetClock from './TargetClock.svelte';
    let currPerc_value = 50;

    currPerc.subscribe((value)=>{
        currPerc_value = value;
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
    top: 12rem;
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
    <div class="target-clock" >
        <TargetClock />
    </div>
</div>