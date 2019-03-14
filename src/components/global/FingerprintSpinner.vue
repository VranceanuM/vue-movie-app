<template>
    <v-layout 
        flex 
        justify-center
        style="position:absolute; top:40%; left:40%;">
        <fingerprint-spinner
        :animation-duration="1500"
        :size="164"
        color="#3e47d5"
        />
    </v-layout>
</template>
<script>
import { FingerprintSpinner } from 'epic-spinners'
export default {
    name:"FingerprintSpinner",
    components:{
        'fingerprint-spinner': FingerprintSpinner
    }
}
</script>
