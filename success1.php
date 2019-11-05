<?php
session_start();
require_once('dbconfig/config.php');
if($_SESSION['s']==0)
{
	header('location:index1.php');
}
if($_SESSION['s']==1)
{
	$_SESSION['s']=0;
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Success</title>
</head>

<div id="style">
<center><h1>Success</h1></center>
<h2>Thank You For Registering!!</h2>
<center><img src="qr.png"></center>
<a href="logout.php">Logout</a>
</div>
</body>
</html>