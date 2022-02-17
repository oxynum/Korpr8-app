<template>
  <div class="kor-page">
      <div class="korpr-container">
        <h1 class="c-white title-1">
          Hey Rudy !
        </h1>
      </div>
      <div class="korpr-container">
        <card-activity
          v-for="activity in activities"
          :key="activity._id"
          :data="activity"
          @card:clicked="goTo"
        />
      </div>
  </div>
</template>

<script>
import CardActivity from '../components/CardActivity.vue';

export default {
  name: 'SelfActivity',
  components: {
    CardActivity
  },
  data() {
    return {
      activities: [
        {
          _id: 4,
          month: 4,
          monthLabel: 'April',
          year: 2022,
          daysWorked: 22
        },
        {
          _id: 3,
          month: 3,
          monthLabel: 'March',
          year: 2022,
          daysWorked: 21
        },
        {
          _id: 2,
          month: 2,
          monthLabel: 'February',
          year: 2022,
          daysWorked: 16
        },
        {
          _id: 1,
          month: 1,
          monthLabel: 'January',
          year: 2022,
          daysWorked: 18
        }
      ]
    }
  },
  mounted() {
    this.$refs.alfred.play()
  },
  methods: {
    goTo() {
      this.$router.push('activity')
    }
  }
}
</script>
