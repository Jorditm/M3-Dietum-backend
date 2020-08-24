# Diet Manager



## Description

es una plataforma en la que dietista y cliente esta conectado, a traces de Diet Manager podras ver la tabla de comidas que el dietista prepara y actualizaciones a tiempo real de la dieta

## User Stories

- **Signup:** As an anon I can sign up in the platform so that I can start searching for alumni/jobs/events
- **Login  as dietitian:** As a user I can login to the platform so that I can search for alumni/jobs/events
- **Logout:** As a user I can logout from the platform so no one else can use it

## MVP & Backlog



## Client

### Routes

| Path             | Component  | Permissions | Behavior                                                     |
| ---------------- | ---------- | ----------- | ------------------------------------------------------------ |
| `/`              | SplashPage | anon only   | Home page                                                    |
| `/signup`        | SignupPage | anon only   | Signup form, link to login, navigate to edit alumni profile after signup |
| `/login`         | LoginPage  | anon only   | Login form, link to signup, navigate to home directory after login |
| `/logout`        | n/a        | anon only   | Navigate to public homepage after logout, expire session     |
| `/dashboard`     |            |             |                                                              |
| `/signupClient`  |            |             |                                                              |
| `/clientProfile` |            |             |                                                              |
| `/editprofile`   |            |             |                                                              |
| `/tableDiet`     |            |             |                                                              |
| `/searchFood`    |            |             |                                                              |
| `/foodDetail`    |            |             |                                                              |
|                  |            |             |                                                              |

### Components



### Services



## Server

### Models



### Schemas



### Data structure

#### Front-end routes



### API Endpoints (Back end routes)

| HTTP Method | URL            | Request Body         | Success status | Error Status | Description                                                  |
| ----------- | -------------- | :------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                      | 2009           | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` |                      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password} | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)              | 204            | 400          | Logs out the user                                            |
| GET         |                |                      |                |              |                                                              |
| GET         | `/user/:id`    | {id}                 | 200            | 400          |                                                              |
| PUT         |                |                      |                |              |                                                              |
| DELETE      |                |                      |                |              |                                                              |
| GET         |                |                      |                |              |                                                              |
| POST        |                |                      |                |              |                                                              |
| GET         |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |
|             |                |                      |                |              |                                                              |

### States & States transitions



### Task



### Link