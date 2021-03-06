create table users
(
    id         serial primary key,
    name       varchar(50),
    username   varchar(30),
    password   varchar(256),
    created_at timestamp
);

create table posts
(
    id         serial primary key,
    name       varchar(50),
    content    varchar(500),
    user_id    int references users (id),
    created_at timestamp
);

create table comments
(
    id         serial primary key,
    content    varchar(500),
    user_id    int references users (id),
    post_id    int references posts (id),
    created_at timestamp
);

INSERT INTO users(id, name, username, password, created_at)
VALUES (default, 'name1', 'username1', 'password1', (select now()));

INSERT INTO users(id, name, username, password, created_at)
VALUES (default, 'name3', 'username3', 'password3', (select now()));

INSERT INTO users(id, name, username, password, created_at)
VALUES (default, 'name3', 'username3', 'password3', (select now()));

INSERT INTO posts(id, name, content, user_id, created_at)
VALUES (default, 'name1', 'content1', 1, (select now()));

INSERT INTO posts(id, name, content, user_id, created_at)
VALUES (default, 'name2', 'content2', 1, (select now()));

INSERT INTO posts(id, name, content, user_id, created_at)
VALUES (default, 'name1', 'content1', 1, (select now()));

INSERT INTO comments(id, content, user_id, post_id, created_at)
VALUES (default, 'comment1', 1, 1, (select now()));

INSERT INTO comments(id, content, user_id, post_id, created_at)
VALUES (default, 'comment1', 1, 2, (select now()));

INSERT INTO comments(id, content, user_id, post_id, created_at)
VALUES (default, 'comment1', 2, 1, (select now()));

INSERT INTO comments(id, content, user_id, post_id, created_at)
VALUES (default, 'comment1', 2, 2, (select now()));