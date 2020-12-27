# Conduit (Medium Clone based on realworld.io)

## Technologies Used

1. NodeJS - Platform
2. TypeScript - Programming Language
3. PostgreSQL - Database
4. TypeORM - ORM

## Database setup

1. Start psql shell as admin

2. Create Database, user and grant privilege

```psql
create database conduit;
create user conduit with encrypted password 'conduit';
grant all privileges on database conduit to conduit;
```
