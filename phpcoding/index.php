<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<form method="GET">
		<input type="text" name="person">
		<button>SUBMIT</button>
	</form>

<?php
$name="Subham";
echo "Hello  ".$name;
$ar=array("Daniel","subham","Ashu");
foreach ($ar as $loopdata) {
	echo "My name is".$loopdata;
}
function newcalc($x){
	$newnr=$x*.75;
	echo "Answer is:".$newnr;
}
$a=10;
newcalc($a);

 ?>
</body>
</html>