<template>
  
  <v-data-table :headers="headers" :items="customer_name" class="elevation-1">
    <v-toolbar-title>Manage Customer</v-toolbar-title>
    
    <template>
      
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.serial" label="SL."></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.product" label="Product"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.product_per_cartoon" label="Product Per Cartoon"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.supplier_name" label="Supplier Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.sell_price" label="Sell Price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.supplier_price" label="Supplier Price"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
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
          text: 'Customer Name',
          align: 'start',
          sortable: false,
          value: 'customer_name',
        },
        { text: 'Customer Email', value: 'customer_email', sortable: false },
        { text: 'Customer Mobile', value: 'customer_mobile',sortable:false },
        { text: 'Customer Address', value: 'customer_address', sortable:false },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      customer_name: [],
      editedIndex: -1,
      editedItem: {
        serial: 0,  
        customer_name: '',
        customer_email: '',
        customer_mobile: 0,
        customer_address: '',
      },
      defaultItem: {
        serial: 0,  
        customer_name: '',
        customer_email: '',
        customer_mobile: 0,
        customer_address: '',
      },
    }),

   // computed: {
      //formTitle () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      //},
   // },

   
   


    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>

</style>