<template>
<v-card>
    <v-card-title class="font-weight-medium mx-3">Add new product</v-card-title>
    <v-divider></v-divider>
   

    <v-card-text>

    <v-form>
        <v-container style="display:flex;justify-content:center">
        <v-card class="my-3" width="50%" style="padding:20px" >
          <v-text-field label="Product Name" :nameRules="name" outlined type="text" required></v-text-field>
          <v-select v-model="select" :categorys="category" :rules="[v => !!v || 'category is required']" label="Category" outlined required></v-select>
          <v-textarea label="Details" outlined dense type="text"></v-textarea>
        </v-card>
        </v-container>
        
        
        <v-card class="elevation-3">
        <v-container>
            <v-row>
                <v-col cols="12" sm="1" lg="3">
                    <v-text-field label="Product Per Cartoon" type="number" min="0" outlined></v-text-field>
                </v-col>
                 <v-col cols="12" sm="1" md="3">
                    <v-text-field label="Sell Price" prefix="₨" type="number" min="0" outlined></v-text-field>
                </v-col>
                 <v-col cols="12" sm="1" md="3">
                    <v-text-field label="Supplier Price" prefix="₨" type="number" min="0" outlined></v-text-field>
                </v-col>
                 <v-col cols="12" sm="1" md="3">
                    <v-text-field label="Supplier" type="text" outlined></v-text-field>
                </v-col>
            </v-row>
    <div class="text-center"> 
            <v-btn color="teal lighten-3" @click="toggleOrder" rounded>Save</v-btn>
            <v-btn color="teal lighten-3" @click="nextSort" rounded>Save and Add Another</v-btn>
    </div>
        </v-container>
        </v-card>
    </v-form>
    </v-card-text>
</v-card>
  
</template>

<script>
  export default {
    data: () => ({
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',
      ],
      select: null,
      categorys: [
        'category 1',
        'category 2',
        'category 3',
        'category 4',
      ]
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      }
    },
  }
</script>

<style>

</style>template