<!DOCTYPE html>
<html>
<body>

<?php 






if (empty($_POST["Name"])) 
{
    echo "Le nom n'est pas indiqué";
} 


echo "votre formulaire  : <br>";
   echo "nom: ", $_POST["Name"];



?> 
</body>
</html>