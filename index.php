<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>
  <body><?php foreach (glob("templates/*.php") as $filename){include $filename;}?>
    <script type="text/javascript" src="js/lib/jquery-2.0.1.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>