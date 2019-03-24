<template>
    <b-container class="main">
    <b-row class="content">
      <h1>Sign up</h1>

      <b-form-select v-model="typeAccount" :options="accountTypes">
          <template slot="first">
              <option value="null" disabled>This account is for a:</option>
          </template>
      </b-form-select>
    </b-row>

    <b-row class="content" v-if="typeAccount !== null">
      <BandForm style="width: 100%;" v-if="typeAccount === accountTypes[0]" />
      <h1 v-else>Not suported yet :(</h1>
    </b-row>
  </b-container>
</template>

<script>
import BandForm from '@/components/forms/BandForm'

export default {
    name: 'SignUp',
    components:{
      BandForm
    },
    data() {
        return {
            typeAccount: null,
            accountTypes: ['Band','Person']
        }
    },
    methods: {
      submitBand(evt){
        evt.preventDefault();
        
      }
    },
}
</script>
