<template>
  <b-col sm="12" lg="4" class="pane">
         <h2>My information</h2>
        <hr>
        <ul class="no-padding">
          <li>
            <h5>Name: {{band.name}}</h5>
          </li>
          <li>
            <h5>Email: {{band.email}}</h5>
          </li>
          <li>
            <h5>Creation Year: {{band.creation_year}}</h5>
          </li>
          <li>
            <h5>Genres:</h5>
            <ul>
              <li class="genres" v-for="(gender, index) in band.genres" :key="index">
                <h5>{{'\t' + gender}}</h5>
              </li>
            </ul>
          </li>
        </ul>
    </b-col>
</template>

<script>
export default {
  name: 'MyInformation',
  props: ['band']
}
</script>

<style scoped>
li {
  list-style-type: none;
}

.genres {
  list-style-type: disc;
}

hr {
  background-color: white;
}
</style>
