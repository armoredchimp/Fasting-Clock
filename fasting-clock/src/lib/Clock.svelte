<script>
    import { onMount } from "svelte";
    
    let date = new Date();
    $: hour = date.getHours();
    $: min = date.getMinutes();
    $: sec = date.getSeconds();

    let amPM = 'AM';

    onMount( ()=>{
        const interval = setInterval(()=>{
            date = new Date();
            amPM = (hour >= 12) ? "PM" : "AM";
        }, 1000);
    });

</script>

<style>
    /* h1 {
        color: rgb(255, 251, 0);
    } */
</style>

<h1>{hour - 12} : {min} : {sec} {amPM}</h1>