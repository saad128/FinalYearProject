
<template>
  <v-data-table
    :headers="headers"
    :items="salesman"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Manage Salesman</v-toolbar-title>
        <v-divider></v-divider>
          <v-card>

            <v-card-text>
              <v-container>
                <v-row>
                 <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.serial" label="SL."></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.salesman_name" label="Salesman Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.salesman_email" label="Salesman Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.saleman_mobile" label="Salesman Mobile"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.salesman_address" label="Salesman Address"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.salesman_password" label="Salesman Password"></v-text-field>
                    </v-col>
                </v-row>
              </v-container>
            </v-card-text>

           
          </v-card>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
        dialog: false,
      headers: [
         {
              text: 'SL.',
              align: 'start',
              sortable: false,
              value: 'serial',
          },
        {
          text: 'Salesman Name',
          align: 'start',
          sortable: false,
          value: 'salesman_name',
        },
        { text: 'Salesman Email', value: 'salesman_email', sortable: false },
        { text: 'Salesman Mobile', value: 'salesman_mobile',sortable:false },
        { text: 'Salesman Address', value: 'salesman_address', sortable:false },
        { text: 'Salesman Password', value: 'salesman_password', sortable:false},
        { text: 'Actions', value: 'action', sortable: false },
      ],
      salesman: [],
      editedIndex: -1,
      editedItem: {
       serial: 0,  
        salesman_name: '',
        salesman_email: '',
        salesman_mobile: 0,
        salesman_address: '',
        salesman_password:0,
      },
      defaultItem: {
        serial: 0,  
        salesman_name: '',
        salesman_email: '',
        salesman_mobile: 0,
        salesman_address: '',
        salesman_password:0,
      },
    }),

   

    methods: {

      deleteItem (item) {
        const index = this.salesman.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.salesman.splice(index, 1)
      },

    },
  }
</script>