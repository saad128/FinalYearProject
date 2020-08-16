<template>
    <v-card>
        <v-card-title>Add Customer</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form>
                 <v-text-field  label="Customer Name" :rules="[rules.required]" outlined type="name"></v-text-field>
                 <v-text-field label="Customer Email" :rules="[rules.statement]" suffix="@gmail.com" outlined type="email"></v-text-field>
                 <v-text-field label="Customer Mobile" outlined type="phone"></v-text-field>
                 <v-textarea label="Customer Address" outlined></v-textarea>
                 <v-spacaer></v-spacaer>
                 <div class="button">
                 <v-btn color="teal lighten-3" rounded>save</v-btn>

                 <v-btn color="teal lighten-3" rounded>Save And Add Another</v-btn>
                 </div>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
     data () {
      return {
        rules: {
          required: value => !!value || 'Required.',
          statement: value => !!value || 'Required',
          
        },
      }
    },
}
</script>
