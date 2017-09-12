<template>
<div>

  <!-- navbar -->
  <nav class="navbar navbar-default" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">H8 Todo Fancy</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <!-- div search -->
      <div class="col-sm-3 col-md-3">
        <form class="navbar-form" role="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="q">
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <span class="glyphicon glyphicon-search"></span></button>
            </div>
          </div>
        </form>
      </div>
      <!--  div search -->

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown
            <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">Separated link</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>
  <!-- navbar -->

</div>
</template>

<script>
  export default {
  }
</script>