<?php
$amount = 1000;

$vat = $amount * 0.15;
$total = $amount + $vat;

echo "VAT: " . $vat . "<br>";
echo "Total Amount: " . $total;
?>