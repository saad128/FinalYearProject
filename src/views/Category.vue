<template>
<div class="main div">
  <div class="add category">
    <v-card>
      <v-card-title class="font-weight-medium mx-3">Add Category</v-card-title>
      <v-divider></v-divider>
      <v-card-text>

        <v-form>
        <v-container style="display:flex;justify-content:center">
          <v-text-field style="width: 50%" label="Catetory Name" outlined dense class="mx-5"></v-text-field>
        </v-container>
        </v-form>
      <div class="text-center mb-2">
          <v-btn class="btn" color="teal lighten-3">Save</v-btn>
      </div>
      </v-card-text>
      </v-card>
  </div>
  
  <v-spacer></v-spacer>
  
  <div class="save category mt-5">
      <v-card>
        <v-card-title class="font-weight-medium mx-3" >Manage Category</v-card-title>
        <v-divider></v-divider>
      <v-card-text>
        <v-data-table :headers="headers">
          

        </v-data-table>
        
      </v-card-text>
      
      
            
      </v-card>
      
  </div>  
</div>
</template>



<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'SL.',
            align: 'center',
            value: 'serial',
            sortable: false,
          },
          { text: 'Category Name',
            value: 'category_name',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Action',
            value: 'action',
            align: 'center',
            sortable: false,
          }
        ],
       deleteItem (item) {
         const index = this.serial.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.serial.splice(index, 1)
      }
      }
    },
  }
</script>

