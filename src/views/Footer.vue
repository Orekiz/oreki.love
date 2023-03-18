<script setup lang="ts">
function toggleDarkHandler() {
    document.querySelector('html')?.classList.toggle('dark')
}
</script>

<template>
    <footer border-t fixed flex justify-center items-center bottom-0 left-0 w-screen h-16 bg-transparent>
        <div my-max-width ma gap-4 flex justify-center items-center>
            <button block p-3 text="gray-800 dark:gray-100" @click="toggleDarkHandler" i-mdi-white-balance-sunny
                    dark:i-mdi-weather-night-partly-cloudy />
            <p inline-block>2023-PRESENT &copy; Oreki</p>
        </div>
    </footer>
</template>