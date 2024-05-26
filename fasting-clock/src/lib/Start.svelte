<script>
    
    import { hours, futureDate } from './stores'

    let hoursRead = 0;
    // let futureRead = new Date()
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
        // futureDate.update((n)=> futureRead = n)
        // console.log(futureRead)
    }

</script>

<button on:click={begin} style="width: 20rem; height: 5rem;"

>Begin Fast


</button>