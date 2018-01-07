<template>
  <div>
    <navigation></navigation>
    <nuxt/>
  </div>
</template>
<script>
  import navigation from '~/components/Navigation'

  export default {
    components: {
      navigation
    }
  }
</script>
