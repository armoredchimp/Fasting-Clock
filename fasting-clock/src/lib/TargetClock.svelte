<script>
    import { onMount } from "svelte";
    import { hours } from "./stores";

    let date = new Date();
    $: hour = date.getHours();
    $: min = date.getMinutes();
    $: sec = date.getSeconds();

    let amPM = 'AM';
    let amPM2 = amPM;

    onMount( ()=>{
        const interval = setInterval(()=>{
            date = new Date();
            let curr = (lengthVal + (hour - 12))
            amPM = (hour >= 12) ? "PM" : "AM"; 
            let ampPMreverse = "AM"
            ampPMreverse = (amPM === "AM") ? "PM" : "AM"
            amPM2 =((curr / 12) >= 1 && (curr / 12) < 2) ? ampPMreverse : amPM   
        }, 1000);
    });
    

    let lengthVal = 12
    $: currHour = (lengthVal + (hour -12)) % 12

    hours.subscribe((value)=>{
        lengthVal = value;
    })
</script>

<h3>Ending Time:</h3>
<h1>{(currHour === 0 ? 12 : currHour) < 10 ? '\u00A0\u00A0' + (currHour === 0 ? 12 : currHour) : (currHour === 0 ? 12 : currHour)} : {min < 10 ? '0' + min : min} : {sec < 10 ? '0' + sec : sec} {amPM2}</h1>
