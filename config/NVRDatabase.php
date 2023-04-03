<?php
class Database
{
   // private $host = "192.168.1.202";
   // private $db_name = 'NursingVR';
   // private $username = 'root';
   // private $password = '';
   // private $conn;

    AWS RDS
    private $host = ".us-west.connect.psdb.cloud";
    private $db_name = 'NursingVR';
    private $username = 'n6zfvzbog0zcpp1y3t5k';
    private $password = 'pscale_pw_eebZyF8tOJPkG5wjfi15GJq9w4ahI2Vae1IoU1dZEMd';
    private $conn;
    // DB Connect
    public function connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }
}
