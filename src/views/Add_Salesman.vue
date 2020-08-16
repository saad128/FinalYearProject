<template>
    <v-card>
        <v-card-title>Add Salesman</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form>
                 <v-text-field  label="Salesman Name" :rules="[rules.required]" outlined type="name"></v-text-field>
                 <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="Salesman Email"
                    suffix="@gmail.com"
                    outlined
                 >
                 </v-text-field>
                 <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    outlined
                    @click:append="show1 = !show1"
                 >
                 </v-text-field>
                 <v-text-field label="Salesman Mobile" outlined type="number" min="0"></v-text-field>
                 <v-textarea label="Salesman Address" :rules="[rules.required]" outlined></v-textarea>
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
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          email: () => ('Enter the valid Email'),
        },
      }
    },
  }
</script>
