CREATE TABLE game_runs (
    run_id SERIAL PRIMARY KEY ,
    score INT NOT NULL ,
    character VARCHAR(255) NOT NULL ,
    date TIMESTAMP NOT NULL ,
    user_id INT NOT NULL ,
    FOREIGN KEY (user_id) REFERENCES _user(user_id)
);
INSERT INTO game_runs (score, "character", "date", user_id)
VALUES
    (12, 'martin', '2023-09-18 14:30:00', 4),
    (22, 'martin', '2023-09-18 14:30:00', 5),
    (1, 'martin', '2023-09-18 14:30:00', 4),
    (2, 'martin', '2023-09-18 14:30:00', 5),
    (69, 'martin', '2023-09-18 14:30:00', 5),
    (14, 'martin', '2023-09-18 14:30:00', 4),
    (52, 'martin', '2023-09-18 14:30:00', 4),
    (22, 'martin', '2023-09-18 14:30:00', 6),
    (32, 'martin', '2023-09-18 14:30:00', 4),
    (14, 'martin', '2023-09-18 14:30:00', 6);
