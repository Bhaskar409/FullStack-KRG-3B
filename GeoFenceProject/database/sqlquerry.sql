
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    last_updated DATETIME DEFAULT GETDATE()
);

CREATE TABLE geofence (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100),
    center_latitude DECIMAL(9,6),
    center_longitude DECIMAL(9,6),
    radius_meters FLOAT
);

select * from users

use GeoFence

INSERT INTO geofence (name, center_latitude, center_longitude, radius_meters)
VALUES ('Office Zone', 28.6139, 77.2090, 500);


select* from geofence


INSERT INTO geofence (name, center_latitude, center_longitude, radius_meters)
VALUES ('clg', 30.7703, 76.5768, 500);

delete from geofence
where name = 'Hostel'

delete from users
where id = 15

ALTER TABLE users
DROP CONSTRAINT UQ__users__AB6E6164B7E30C46;



delete from geofence
where name = 'Office Zone'
