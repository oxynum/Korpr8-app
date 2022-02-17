<template>
    <div class="pad-container">
        <button v-for="day in days" :key="day" class="c-white text-basic" @click="emitClicked">
            {{ day }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pad',
    data() {
        return {
            days: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30
            ]
        }
    },
    methods: {
        emitClicked() {
            this.$emit('pad:clicked')
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/base/colors';

    .pad-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        overflow: scroll;
        height: 100vh;

        button {
            background: $color-grey-light;
            margin: 8px;
            padding: 8px 4px;
            border-radius: 20px;
            justify-content: space-around;
            border: none;
            height: 10vh;
        }
    }
</style>