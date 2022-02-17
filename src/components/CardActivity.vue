<template>
    <div class="kor-card-activity" @click="emitSom">
        <div class="left">
            <h3 class="c-white title-1">
                0{{ data.month }}
            </h3>
        </div>
        <div class="right">
            <span class="c-grey-light-2 text-basic">
                {{ data.monthLabel }} {{ data.year }}
            </span>
            <span class="c-white text-label">
                Nombre de jours: {{data.daysWorked}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardActivity',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        getMonth() {
            return this.data.month
        }
    },
    methods: {
        emitSom() {
            this.$emit('card:clicked', { _id: this._id})
        }
    }
}
</script> 


<style lang="scss">
@import '../assets/styles/base/colors';

.kor-card-activity {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 20px;
    background: $color-grey-light;
    margin-bottom: 1em;
    height: 16vh;
    border: 1px solid transparent;
    
    &:active {
        border: 1px solid $color-purple-primary;
        transition: .5s ease-in-out;
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
}
</style>