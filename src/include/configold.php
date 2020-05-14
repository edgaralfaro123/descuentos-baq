<?PHP
$link = mysql_connect('mysql7.000webhost.com', 'a5116026_edgar', 'licor123')
    or die('No se pudo conectar: ' . mysql_error());
echo 'Connected successfully';
mysql_select_db('a5116026_licores') or die('No se pudo seleccionar la base de datos');

?>