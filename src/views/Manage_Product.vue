<template>
  
  <v-data-table :headers="headers" :items="product" class="elevation-1">
    
    <template v-slot:top>
      
      <v-toolbar flat color="white">
        <v-toolbar-title>Manage Product</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="teal lighten-3" class="mb-2" v-on="on" rounded>Add Product</v-btn>
          </template>
          <v-card>
          <!--  <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>-->

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

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
          text: 'Product',
          align: 'start',
          sortable: false,
          value: 'product',
        },
        { text: 'Product Per Cartoon', value: 'product_per_cartoon', sortable: false },
        { text: 'Supplier Name', value: 'supplier_name',sortable:false },
        { text: 'Sell Price', value: 'sell_price', sortable:false },
        { text: 'Supplier Price', value: 'supplier_price', sortable:false },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      product: [],
      editedIndex: -1,
      editedItem: {
        serial: 0,  
        product: '',
        product_per_cartoon: 0,
        supplier_name: '',
        supplier_price: 0,
        sell_price: 0,
      },
      defaultItem: {
        serial: 0,  
        product: '',
        product_per_cartoon: 0,
        supplier_name: '',
        supplier_price: 0,
        sell_price: 0,
      },
    }),

   // computed: {
      //formTitle () {
        //return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      //},
   // },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },


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