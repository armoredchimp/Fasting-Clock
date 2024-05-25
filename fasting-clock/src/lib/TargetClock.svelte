<script>
    import { onMount } from "svelte";
    import { hours } from "./stores";

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

    let lengthVal;
    

    hours.subscribe((value)=>{
        lengthVal = value;
    })
</script>

<h1>{(lengthVal + (hour - 12)) % 12} : {min} : {sec} {amPM}</h1>