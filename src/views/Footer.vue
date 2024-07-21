<script setup lang="ts">
function toggleDarkHandler() {
    document.querySelector('html')?.classList.toggle('dark')
}
</script>

<template>
    <footer text="gray-600 dark:gray-400" border="t gray-200 dark:gray-400/30" fixed flex justify-center items-center
            bottom-0 left-0 w-screen h-16 bg-transparent>
        <div my-max-width ma gap-4 flex justify-center items-center>
            <button block p-3 @click="toggleDarkHandler" i-mdi-white-balance-sunny dark:i-mdi-weather-night-partly-cloudy />
            <p inline-block>2023-present &copy; Oreki</p>
        </div>
    </footer>
</template>
