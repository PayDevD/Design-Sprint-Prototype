<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $getFile = fopen("./userData.txt", "r");
    $infoArray;

    while(!feof($getFile)){
      $temp = fgets($getFile);

      if(!empty($temp)){
        $tempArray = explode("|",$temp);
        $uid = $tempArray[0];
        $pass = $tempArray[1];

        $infoArray[$uid] = $pass;
      }
    }
    fclose($getFile);

    if(!array_key_exists($_POST["userID"],$infoArray)){

      echo "<p>존재하지 않는 아이디입니다.</p>";

    }elseif($infoArray[$_POST["userID"]] != $_POST["pass"].PHP_EOL) {

      echo "<p>패스워드가 틀립니다.</p>";

    } else {

      include 'main.html';

    }
}
?>
