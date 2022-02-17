<template>
  <div class="kor-page --monthactivity-page">
    <div class="top-header">
      <span class="c-grey-primary text-basic">
        Février 2022
      </span>
      <h1 class="title-1 c-white">
        20 jours d'activité
      </h1>
    </div>
    <pad
      @pad:clicked="openPopup"
    />
    <popup v-if="isPopupOpen" title="Jeudi 4 février 2022">
      <div class="pop-selector">
        <button
          class="choice c-white text-basic"
          :class="{'--selected': getSelected === 1}"
          @click="selection = 1"
        >
          <i
            :class="{'korpr8-check-circle-2': getSelected === 1, 'korpr8-check-circle': getSelected !== 1}"
          >
          </i>
          <span> 1 </span>
          <small>
            Journée complete
          </small>
        </button>
        <button
          class="choice c-white text-basic"
          :class="{'--selected': getSelected === 2}"
          @click="selection = 2"
        >
          <i
            :class="{'korpr8-check-circle-2': getSelected === 2, 'korpr8-check-circle': getSelected !== 2}"
          >
          </i>
          <span> 0.5 </span>
          <small>
            Moitié de journée
          </small>
        </button>
        <button
          class="choice c-white text-basic"
          :class="{'--selected': getSelected === 3}"
          @click="selection = 3"
        >
          <i
            :class="{'korpr8-check-circle-2': getSelected === 3, 'korpr8-check-circle': getSelected !== 3}"
          >
          </i>
          <span> 0 </span>
          <small>
            Jour off
          </small>
        </button>
      </div>
    </popup>
  </div>
</template>

<script>
import Pad from '../components/Pad.vue';
import Popup from '../components/Popup.vue';

export default {
    components: {
        Pad,
        Popup
    },
    data() {
      return {
        isPopupOpen: false,
        selection: null
      }
    },
    computed: {
      getSelected() {
        return this.selection
      }
    },
    methods: {
      openPopup() {
        this.isPopupOpen = true
      }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/base/colors';

.--monthactivity-page {
  .top-header {
    margin-bottom: 30px;
  }

  .pop-selector {
    .choice {
      background: transparent;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      border: none;
      border-radius: 15px;
      padding: 15px 4px;
      margin-bottom: 1em;
      transition: .1s ease-in-out;


      i {
        font-size: 25px;
        font-weight: 400;
      }

      &.--selected {
        background: $color-grey-background;
        transition: .2s ease-in-out;

        i {
          color: $color-purple-primary;
        }
      }
    }
  }
}
</style>