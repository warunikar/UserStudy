<?php
$q = $_GET['q'];
$q2 =$_GET['qa'];
$q3 = $_GET['qb'];
$db = 'comox10h_responses';
$table = $_GET['name'];
$user = 'username';
$pw = 'password';

$con = mysqli_connect('localhost',$user,$pw,$db);
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
else{
	mysqli_select_db($con,$table);
	$sql=$sql="INSERT INTO ". $table ." VALUES('User1','".$q."','".$q2."','".$q3."')";
	$result = mysqli_query($con,$sql);

	echo $result;
	mysqli_close($con);
}
?>