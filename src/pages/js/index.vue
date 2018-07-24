<template>
    <div>
        <p id="sayHello" class="text-primary">Hello world</p>
    </div>
</template>

<script>
export default {
    mounted() {
        $('body').append("<p>hello world(我是 jq 创建的)</p>");
    }
}
</script>