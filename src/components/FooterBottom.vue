<template>
    <footer class="text-center bg-secondary p-5">
        <div class="row justify-content-lg-center">
            <div class="col">
                <router-link to="#" class="navbar-brand">
                    <fa :icon="['fab', 'facebook-square']" size="2x" />
                </router-link>
            </div>
            <div class="col">
                <router-link to="#" class="navbar-brand">
                    <fa :icon="['fab', 'instagram-square']" size="2x"/>
                </router-link>
            </div>
            <div class="col">
                <router-link to="#" class="navbar-brand">
                    <fa :icon="['fab', 'linkedin']" size="2x"/>
                </router-link>
            </div>
            <div class="col">
                <router-link to="#" class="navbar-brand">
                    <fa :icon="['fab', 'twitter-square']" size="2x"/>
                </router-link>
            </div>
            <div class="col">
                <router-link to="#" class="navbar-brand">
                    <fa :icon="['fab', 'google-plus-g']" size="2x"/>
                </router-link>
            </div>
        </div>
    </footer> 
</template>
  
<script>
    export default {}
</script>

<style scoped>
    * {
        color: #fff;
    }
</style>