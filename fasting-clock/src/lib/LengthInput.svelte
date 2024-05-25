<script>
    
    import { hours, currPerc } from "./stores";

    let length = 12;
    

    function displayPerc(){
        currPerc.update((n)=> length * 4.2)       
    }

    function hoursChange(){
        hours.update((n)=> length)
    }

</script>


<h2 style="margin-left: 5rem;">Fasting Length</h2>
<label>
    <input type="number" bind:value={length} on:input={displayPerc} on:input={hoursChange} min="12" max="24" />
    <input type="range" bind:value={length} on:input={displayPerc} on:input={hoursChange} min="12" max="24" />
</label>
{#if length === 24}
<p>The fast will be for {length} hours!</p>
{:else}
<p>The fast will be for {length} hours.</p>
{/if}