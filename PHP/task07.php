<?php

// Pattern 1: Stars
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "&nbsp;&nbsp;&nbsp;";
    
    // Numbers
    for ($k = 1; $k <= (4 - $i); $k++) {
        echo $k . " ";
    }
    echo "&nbsp;&nbsp;&nbsp;";
    
    // Letters
    $char = 65; // ASCII A
    for ($l = 1; $l <= $i; $l++) {
        echo chr($char++) . " ";
    }
    
    echo "<br>";
}
?>