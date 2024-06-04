<script>
  import TailwindCss from './lib/TailwindCSS.svelte';
</script>

<TailwindCss/>

<html lang="en">
  <head>
    <!-- Redirects to a different page -->
    <!--  <meta http-equiv="Refresh" content="0; url='CSC160_FinalProject/index.html" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="app.css" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>Eli Gooch | Projects</title>
  </head>

  <body>
    <div class="container mx-auto">
      <h2 class="absolute ml-5 mt-5 text-xl float-left">
        <a class="websiteLink" href="https://www.eligooch.com/">Eli Gooch</a>
      </h2>
      <br />
      <!-- Projects -->
      <div
        class="container-fluid projects grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        id="projects"
      >
        <h1 class="float-none text-4xl">Projects</h1>
        <ul>
          <li>
            <a class="flex-none" href="CSC160_FinalProject/index.html"
              >CSC 160 Final Project</a
            >
          </li>
          <li>
            <a href="3D-Engine/index.html">3D Engine</a>
          </li>
          <li>
            <a href="Web-API-Project/index.html">Web API</a>
          </li>
          <li>
            <a href="etrade-data/index.html">E-Trade Data Visualization</a>
          </li>
          <li>
            <a href="quizbowl.io/quizbowl-io/index.html">Quizbowl.io</a>
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
