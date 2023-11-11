<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu-navegacao" >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>                
                <router-link to="/">
                    <li class="navbar-brand">CV</li>
                </router-link>
            </div> 

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                    <router-link to="/who-i-am" class="nav-link">
                        <li class="nav-item">Quem Sou Eu</li>
                    </router-link>
                    <router-link to="/what-i-do" class="nav-link">
                        <li class="nav-item">O Que Faço</li>
                    </router-link>
                    <router-link to="/my-hobbies" class="nav-link">
                        <li class="nav-item">Hobbies</li>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav> 
  <router-view/>
</template>
  
<script>
    export default {}
</script>

<style scoped>
.navbar-brand {
   font-weight: 700; 
} 
</style>