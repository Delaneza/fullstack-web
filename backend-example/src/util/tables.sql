create table users
(
    id         serial primary key,
    name       varchar(50),
    username   varchar(30),
    password   varchar(256),
    created_at timestamp
);

create table comments
(
    id         serial primary key,
    content    varchar(500),
    user_id    int references users (id),
    created_at timestamp
);

create table posts
(
    id         serial primary key,
    name       varchar(50),
    content    varchar(500),
    comment_id int references comments (id),
    created_at timestamp
);