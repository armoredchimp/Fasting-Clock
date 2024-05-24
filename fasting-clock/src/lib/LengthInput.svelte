<script>
    export let length = 12;

</script>


<h2 style="margin-left: 5rem;">Fasting Length</h2>
<label>
    <input type="number" bind:value={length} min="12" max="24" />
    <input type="range" bind:value={length} min="12" max="24" />
</label>
{#if length === 24}
<p>The fast will be for {length} hours!</p>
{:else}
<p>The fast will be for {length} hours.</p>
{/if}