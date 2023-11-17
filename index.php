<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gim Bola</title>
    <style>
    .img {
        position: absolute;
        position: relative;
        transition: top 0.5s ease;
    }

    .atas {
        width: 100%;
        height: 90%;
    }

    .bawah {
        width: 100%;
        height: 50%;
        position: fixed;
        bottom: 0;
    }
    
    body {
        background-image: url(laut.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    </style>
</head>

<body>
    <div class="atas"></div>
    <div class="bawah">
        <img src="perahu.png" class="img" id="img" width="300px">
    </div>
</body>

</html>
<script src="main.js"></script>