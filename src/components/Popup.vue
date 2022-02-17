<template>
    <div class="kor-popup">
        <div class="kor-popup__content">
            <div class="header">
                <h1 class="title-1 c-white">
                    {{ title }}
                </h1>
                <div class="close-action">
                    <i class="korpr8-close"></i>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        title: {type: String, required: false, default: 'A title'}
    }
}
</script>

<style lang="scss">
@import '../assets/styles/base/colors';

.kor-popup {
    background: rgba(9, 0, 12, 0.151);
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    
    &__content {
        position: fixed;
        height: 33vh;
        border: 1px solid $color-grey-light-2;
        background: $color-grey-light;
        bottom: 0;
        left: 0;
        right: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 1em;

        .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: $color-grey-light-2;

            .close-action {
                background: $color-grey-background;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
        
                i {

                }
            }
        }
    }
}
</style>