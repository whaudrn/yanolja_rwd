<div id="top_login">
<?
if(!$_SESSION['userid'] )
{
?>
<a href="login_form.php">로그인</a>

<?
}
else
{
?>
<?=$_SESSION['userid']?> | 
<a href="logout.php">로그아웃&nbsp;</a>

<?
}
?>
</div>
