const Customer = `<html>
<head>
  <title>Customer Site</title>
<!--  <link href="../customer/gfs.png" rel="icon" type="image/x-icon">-->
  <script>!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=new URLSearchParams(document.location.search),o=e.has("property")?e.get("property"):"test",n=document.createElement("script");n.type="text/javascript",n.src="https://global.ketchcdn.com/web/v3/config/pebo/".concat(o,"/boot.js"),n.defer=n.async=!0,document.getElementsByTagName("head")[0].appendChild(n)}();</script>    <style>
  body, html {
    height: 100%;
    margin: 0;
  }

  .bg {
    /* The image used */
    /*background-image: url("../customer/dropouthomepage.png");*/

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .privButton {
    position: fixed;
    bottom: 10px;
    left: 10px;
  }
  .privButton2 {
    position: fixed;
    bottom: 600px;
    left: 10px;
  }

</style>
</head>

<body>
<div class="bg">
  <div class="privButton2">
    <a href="http://www.google.com">Random Link</a>
  </div>
</div>
<div class="bg">
  <div class="privButton">
`;

export default Customer;
