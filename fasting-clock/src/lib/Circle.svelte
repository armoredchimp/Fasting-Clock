<script>
    export const currPerc = 64;
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
    width: 100%;
    background-color: purple;
   }
</style>

<div class="circle">
    <div class="overlay" style="height: {currPerc}%"></div>
</div>