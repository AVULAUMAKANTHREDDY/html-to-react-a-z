
-- CREATE TABLE state (
--     state_id	INTEGER PRIMARY KEY AUTOINCREMENT,
--     state_name	TEXT,
--     population	INTEGER
-- );

-- PRAGMA TABLE_INFO(state);


-- INSERT INTO 
--     state(state_name,population)
-- VALUES
--   ('Uttar Pradesh',199581477),
-- 	('Maharashtra',112372972),
-- 	('Bihar',103804637),
-- 	('West Bengal',91347736),
-- 	('Andhra Pradesh',84665533),
-- 	('Madhya Pradesh',72597565),
-- 	('Tamil Nadu',72138958),
-- 	('Rajasthan',68621012),
-- 	('Karnataka',61130704),
-- 	('Gujrat',60383628),
-- 	('Odisha',41947358),
-- 	('Telangana',35193978),
-- 	('Kerala',33387677),
-- 	('Jharkhand',32966238),
-- 	('Assam',31169272),
-- 	('Punjab',27704236),
-- 	('Haryana',25353081),
-- 	('Chhattisgarh',25540196),
-- 	('Delhi',16753235),
-- 	('Jammu and Kashmir',12267013),
-- 	('Uttarakhand',11116752),
-- 	('Himachal Pradesh',6856509),
-- 	('Tripura',3671032),
-- 	('Meghalaya',2964007),
-- 	('Manipur',2721756),
-- 	('Nagaland',1980602),
-- 	('Goa',1457723),
-- 	('Arunachal Pradesh',1382611),
-- 	('Mizoram',1091014),
-- 	('Sikkim',607688),
-- 	('Puducherry',1244464),
-- 	('Chandigarh',1054686),
-- 	('Dadra and Nagar Haveli and Daman and Diu',585764),
-- 	('Andaman and Nicobar Islands',379944),
-- 	('Ladakh',274289),
-- 	('Lakshadweep',64429)


-- SELECT*FROM state



-- CREATE TABLE districttable (
--     district_id	INTEGER PRIMARY KEY AUTOINCREMENT,
--     district_name	TEXT,
--     state_id INTEGER,
--     cases	INTEGER,
--     cured	INTEGER,
--     active	INTEGER,
--     deaths	INTEGER
-- );

-- PRAGMA TABLE_INFO(districttable);


-- INSERT INTO 
--     districttable(district_name,district_id,cases,cured,active,deaths)
-- VALUES

-- 	('Uttar Pradesh',1,2145441,2121674,1209,23712),
-- 	('Maharashtra',2,8171355,8022605,10000,148561),
-- 	('Bihar',2,855267,842952,19000,12314),
-- 	('West Bengal',4,2126345,2104680,3500,21555),
-- 	('Andhra Pradesh',5,2340676,2325943,4000,14733),
-- 	('Madhya Pradesh',6,1056351,1045565,5000,10786),
-- 	('Tamil Nadu',7,3610674,3572578,13000,38081),
-- 	('Rajasthan',8,1326465,1316729,15000,9736),
-- 	('Karnataka',9,4088805,4048420,20000,40358),
-- 	('Gujrat',10,1291386,1280305,1500,11079),
-- 	('Odisha',11,1348418,1339143,10000,9215),
-- 	('Telangana',12,844440,840324,1350,4111),
-- 	('Kerala',13,6907275,6835212,2000,72042),
-- 	('Jharkhand',14,443827,438493,3000,5334),
-- 	('Assam',15,746159,738119,4000,8035),
-- 	('Punjab',16,793648,773076,7000,19338),
-- 	('Haryana',17,1078915,1068130,1000,10755),
-- 	('Chhattisgarh',18,1187695,1173505,3000,14190),
-- 	('Delhi',19,2040937,2014261,1200,26666),
-- 	('Jammu and Kashmir',20,482023,477231,1234,4792),
-- 	('Uttarakhand',21,452572,444804,568,7768),
-- 	('Himachal Pradesh',22,322919,318669,3000,4242),
-- 	('Tripura',23,108494,107551,2400,942),
-- 	('Meghalaya',24,96985,95355,1000,1628),
-- 	('Manipur',25,140034,137885,1500,2149),
-- 	('Nagaland',26,36033,35251,1000,782),
-- 	('Goa',27,263352,259338,2000,4014),
-- 	('Arunachal Pradesh',28,67049,66753,3000,296),
-- 	('Mizoram',29,239561,238827,3500,734),
-- 	('Sikkim',30,44927,44425,4000,501),
-- 	('Puducherry',31,177547,175566,4500,1981),
-- 	('Chandigarh',32,100693,99508,1000,1185),
-- 	('Dadra and Nagar Haveli and Daman and Diu',33,11592,11588,500,4),
-- 	('Andaman and Nicobar Islands',34,10766,10637,3000,129),
-- 	('Ladakh',35,29602,29371,1000,231),
-- 	('Lakshadweep',36,11415,11363,1500,52)

-- SELECT*FROM district

	



CREATE TABLE state (
    state_id	INTEGER PRIMARY KEY AUTOINCREMENT,
    state_name	TEXT,
    population	INTEGER
);

PRAGMA TABLE_INFO(state);


INSERT INTO 
    state(state_name,population)
VALUES
    ('Andhra Pradesh',49386799),
    ('Telangana',35286757)


SELECT*FROM state



CREATE TABLE district (
    district_id	INTEGER PRIMARY KEY AUTOINCREMENT,
    district_name	TEXT,
    state_id	INTEGER,
    cases	INTEGER,
    cured	INTEGER,
    active	INTEGER,
    deaths	INTEGER
);

PRAGMA TABLE_INFO(district);


INSERT INTO 
    district(district_name,state_id,cases,cured,active,deaths)
VALUES
    ('Adilabad',2,32,72,56,0 ),
    ('Anantapur',1,345,52,43,0),
    ('Chittoor', 1,134,543,76,3),
    ('East Godavari', 1,1234,534,2,2),
    ('Guntur', 1,123,65,87,4),
    ('Hyderabad', 2,1234,645,876,54),
    ('Kadapa', 1,113,657,765,9),
    ('Karimnagar', 2,123,75,87,3),
    ('Khammam', 2,345,324,54,3),
    ('Krishna', 1,543,654,76,4),
    ('Kurnool', 1,234,654,87,9),
    ('Mahbubnagar',2,231,765,9,0),
    ('Medak', 2,231541,32,65,6),
    ('Nalgonda', 2,765,567,34,5),
    ('Nellore', 1,432,432,76,9),
    ('Nizamabad', 2,154,543,65,9),
    ('Prakasam', 1,176,34,7,5),
    ('Rangareddi', 2,189,543,87,9),
    ('Srikakulam', 1,135,456,93,5),
    ('Vishakhapatnam', 1,162,345,87,0),
    ('Vizianagaram', 1,783,345,765,8),
    ('Warangal', 2,345,6547,345,8),
    ('West Godavari', 1,350,324,834,9)

SELECT*FROM district















