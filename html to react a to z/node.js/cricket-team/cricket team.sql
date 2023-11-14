CREATE TABLE cricket_team(
    player_id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_name TEXT,
    jersey_number INTEGER,
    role TEXT

);

PRAGMA TABLE_INFO(cricket_team)


INSERT INTO cricket_team(player_name,jersey_number,role)
VALUES
    ('Jadeja',8,'Allrounder'),
    ('Shubman Gill',7,'OpeningBatter'),
    ('Virat Kohli',18,'ToporderBatter'),
    ('Rohit Gurunath Sharma',45,'ToporderBatter'),
    ('Washington Sundar',13,'BowlingAllrounder')



SELECT*FROM cricket_team