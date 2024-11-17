<script setup>
import { ref } from "vue";

const show = ref(true);
const user = ref({
    name: "John",
    role: "admin",
});
</script>

<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <div v-if="show" v-memo="[user.role]">
            <!-- 只有当 user.role 改变时才会重新渲染 -->
            <h2>User Role: {{ user.role }}</h2>
            <div>Complex permission calculations...</div>
        </div>
    </div>
</template>
