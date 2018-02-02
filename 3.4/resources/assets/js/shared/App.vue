<template>
    <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Support Master</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">Home</a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/create">Submit Ticket</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="body-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>
<script>
export default {
  
}
</script>

