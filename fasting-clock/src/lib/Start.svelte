<script>
    
    import { hours, futureDate, hasStarted } from './stores'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let hoursRead = 0;
    let end = new Date()

    function getHours(){
        hours.update((n)=> hoursRead = n)
    }

    function begin(){
        getHours()
        let now = new Date()
        end = new Date(now.getTime() + hoursRead * 60 * 60 * 1000) 
        futureDate.update((n)=> n = end)
        console.log(end)
        hasStarted.update((n)=>n = true)
        dispatch('started',{
            now: now
        })
    }

</script>

<button on:click={begin} style="width: 20rem; height: 5rem;"

>Begin Fast


</button>