<?php
class Database
{
   // private $host = "192.168.1.202";
   // private $db_name = 'NursingVR';
   // private $username = 'root';
   // private $password = '';
   // private $conn;

    AWS RDS
    private $host = "nursing-vr.cbogay316a3k.us-west-2.rds.amazonaws.com";
    private $db_name = 'nursing-vr';
    private $username = 'admin';
    private $password = 'nursing1!';
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
