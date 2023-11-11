<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <span class="fas fa-home"></span>
                <span class="nav-item nav-link active">CV</span>
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-flex" id="menu">
                <div class="">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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