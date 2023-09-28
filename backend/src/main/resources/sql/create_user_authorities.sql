CREATE TABLE _user (
	user_id serial NOT NULL PRIMARY KEY,
	username varchar (100) UNIQUE NOT NULL,
	password varchar (500) NOT NULL,
	highscore bigint DEFAULT 0
);

INSERT INTO _user (username, password)
VALUES 
('martin', '$2a$12$cRhvJOf9ZXdK/ao..PKmjuV4t3lICILuFiN444Ki6CG6FMMrfi5I2'),
('kristian', '$2a$12$vZgGKOWaCOtLSlbZV90ULuJwwhfE6q11sJeGRGTlg.p2K/zhH76la'),
('sebastian', '$2a$12$/MwebRD7Dkel00Pn06eBneUI1h/pYbFy040QVGfUrwdsWV/6yMpVC'),
('testuser1', '$2a$12$lWR4TcDam3pJXkhZrrAgzO/AneZz5Bd3jguDz7bEnWyuDDxXlHvrO'),
('testuser2', '$2a$12$vGt7CdLzwBoFc08V32Af3.hgjlf9Cl7hSG1Mg3JwHWfXeJQzWyUBW'),
('testuser3', '$2a$12$Xf2N56QEFGl./Yt1Ydayb.ywCvCkSamE1L7uFm1pgsTh4e.8Kf/KW'),
('testuser4', '$2a$12$fFd9GjH.nQ75ZP2kfbeYxOQtfGrMVqzMc34C886pH.cG01eOIu4i6'),
('testuser5', '$2a$12$MkWmVdLrJWrcwqXSZHQWeObOnIxa2CNyUHgQq5z66hxHVhwcDx7fK'),
('testuser6', '$2a$12$FQwSqKDjbGM.dhxGnsoweuLMVaT93N2RfspX9H4FgGxk32kU8pwWW'),
('testuser7', '$2a$12$NEdllVrr03cngKTQcrra2er13R3z3OuNH7MhFSBfXQMHX/SoSEWty');

CREATE TABLE authorities (
	user_id int NOT NULL,
	authority varchar(50) NOT NULL
);

INSERT INTO authorities (user_id, authority)
VALUES 
(1, 'USER'),
(1, 'ADMIN'),
(2, 'USER'),
(2, 'ADMIN'),
(3, 'USER'),
(3, 'ADMIN'),
(4, 'USER'),
(5, 'USER'),
(6, 'USER'),
(7, 'USER'),
(8, 'USER'),
(9, 'USER'),
(10, 'USER');


