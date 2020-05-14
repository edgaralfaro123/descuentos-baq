<?php
 include "config.php";
session_start();
//EXTRAEMOS EL CONTENIDO DEL CHAT 
$sql="SELECT * FROM chat order by id desc "; 
$rows=mysql_query($sql); 

if($row>0)
{
   
   while ($row=mysql_fetch_array($rows))
      {
      	?>
      	<strong><?=$row['usuario']?></strong> : <?=$row['mensaje']?>
         <?
      }else{
          ?>
          &nbsp;
          <?
  }
}
?> 