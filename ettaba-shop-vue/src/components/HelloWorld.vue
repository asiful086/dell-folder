<template>
    <div class="m-2 3xl:w-[210px] 3xl:h-[376px]  border-2">
        <!-- <div class=""> -->
        <!-- image -->
        <div class="w-full">
            <img
                class="w-full h-[200px] object-cover object-center"
                :src="imgUrl"
                alt=""
            />
        </div>
        <div>name</div>
        <div>price</div>
        <div>description</div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
        imgUrl: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
