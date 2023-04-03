<?php
class S1
{
  // DB stuff
  private $conn;

  public $idS1Session;
  public $Ant_RUL;
  public $Ant_RML;
  public $Ant_RLL;
  public $Ant_LUL;
  public $Ant_LLL;
  public $POST_RUL;
  public $POST_RLL;
  public $POST_LUL;
  public $POST_LLL;
  public $Lat_RUL;
  public $Lat_RML;
  public $Lat_RLL;
  public $Lat_LUL;
  public $Lat_LLL;
  public $submitTime;
  public $leftUnmeasured;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function read()
  {
    // Create query
    $query = 'SELECT userID, stateName, zip, city, country, macAddress FROM Plant.userData';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function read_single()
  {
    $query = 'SELECT * FROM NursingVR.S1Session order by idS1Session desc limit 1;';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function create()
  {
    // Create query

    $query = 'INSERT INTO NursingVR.S1Session SET Ant_RUL = ?, Ant_RML = ?,Ant_RLL = ?,Ant_LUL = ?,Ant_LLL = ?,Post_RUL = ?, Post_RLL = ?,Post_LUL = ?,Post_LLL = ?,Lat_RUL = ?, Lat_RML = ?,Lat_RLL = ?,Lat_LUL = ?,Lat_LLL = ?, leftUnmeasured = ?;';
    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->Ant_RUL = htmlspecialchars(strip_tags($this->Ant_RUL));
    $this->Ant_RML = htmlspecialchars(strip_tags($this->Ant_RML));
    $this->Ant_RLL = htmlspecialchars(strip_tags($this->Ant_RLL));
    $this->Ant_RUL2 = htmlspecialchars(strip_tags($this->Ant_LUL));
    $this->Ant_LLL = htmlspecialchars(strip_tags($this->Ant_LLL));

    $this->Post_RUL = htmlspecialchars(strip_tags($this->Post_RUL));
    $this->Post_RLL = htmlspecialchars(strip_tags($this->Post_RLL));
    $this->Post_RUL2 = htmlspecialchars(strip_tags($this->Post_LUL));
    $this->Post_LLL = htmlspecialchars(strip_tags($this->Post_LLL));

    $this->Lat_RUL = htmlspecialchars(strip_tags($this->Lat_RUL));
    $this->Lat_RML = htmlspecialchars(strip_tags($this->Lat_RML));
    $this->Lat_RLL = htmlspecialchars(strip_tags($this->Lat_RLL));
    $this->Lat_RUL2 = htmlspecialchars(strip_tags($this->Lat_LUL));
    $this->Lat_LLL = htmlspecialchars(strip_tags($this->Lat_LLL));

    $this->leftUnmeasured = htmlspecialchars(strip_tags($this->leftUnmeasured));
    // Bind data

    $stmt->bindParam(1, $this->Ant_RUL);
    $stmt->bindParam(2, $this->Ant_RML);
    $stmt->bindParam(3, $this->Ant_RLL);
    $stmt->bindParam(4, $this->Ant_LUL);
    $stmt->bindParam(5, $this->Ant_LLL);
    $stmt->bindParam(6, $this->Post_RUL);
    $stmt->bindParam(7, $this->Post_RLL);
    $stmt->bindParam(8, $this->Post_LUL);
    $stmt->bindParam(9, $this->Post_LLL);
    $stmt->bindParam(10, $this->Lat_RUL);
    $stmt->bindParam(11, $this->Lat_RML);
    $stmt->bindParam(12, $this->Lat_RLL);
    $stmt->bindParam(13, $this->Lat_LUL);
    $stmt->bindParam(14, $this->Lat_LLL);
    $stmt->bindParam(15, $this->leftUnmeasured);

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    return false;
  }
  public function getlastSessID()
  {
    // Create query
    $query = 'SELECT * FROM NursingVR.S1Session order by idS1Session desc limit 1;';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }
}
