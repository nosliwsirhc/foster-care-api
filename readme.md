# Boilerplate Auth API

A quickstart for people who want good encryption for their tokens, refresh tokens, Redis for logging refresh tokens so they can be checked or revoked without hitting the DB. Simple user funtions are built-in like registering users in the admin routes, user profile and user list in the users routes. There is also user password change and admin user password reset.

The database used is PostgreSQL but can easily be swapped for any other SQL DB with an appropriate connector or choose an ORM.

## Missing

A lot! Please do not use this for production without adding route authentication and safer DB queries.